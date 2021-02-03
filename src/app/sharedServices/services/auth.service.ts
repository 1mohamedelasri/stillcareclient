import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {NgProgress} from 'ngx-progressbar';
import firebase from 'firebase';
import {Role} from '../models/Role';
import {IFirebaseAccount} from '../models/FirebaseAccount';
import {IContact} from '../models/Contact';
import {IPersonnel} from '../models/Personnel';
import {AccountService} from './account.service';
import auth = firebase.auth;
import {ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentFirebaseAccount = new BehaviorSubject<IFirebaseAccount>( null );
  readonly firebaseAccountObs = this.currentFirebaseAccount.asObservable();

  private currentRole = new BehaviorSubject<Role>( null );
  readonly currentRoleObs =  this.currentRole.asObservable();

  private currentUser = new BehaviorSubject<IPersonnel|IContact>( null );
  readonly currentUserObs =  this.currentUser.asObservable();


  private isLogged = new BehaviorSubject<boolean>( false );
  readonly isLoggedInObs =  this.isLogged.asObservable();

  constructor(    public afAuth: AngularFireAuth, // Inject Firebase auth service
                  public router: Router,
                  public ngProgress: NgProgress,
                  private accountService: AccountService,
                  private toastrService: ToastrService
  ) {
    this.GetLoginStatusFromStorage();
    this.GetRoleFromStorage();
    this.GetUserFromStorage();

    this.afAuth.user.subscribe(async (user) => {

      if (user) {
        this.currentFirebaseAccount.next(user);
        this.isLogged.next(true);
        const [nom, prenom] = user.displayName.split(' ');
        this.accountService.getContactWithToken(user.uid).then(res => {
          this.currentUser.next(res);
          this.currentRole.next(Role.Contact);
          this.isLogged.next(true);
          this.router.navigate(['/contact']);
        }).catch((exp) => {
          if (exp.status === 404) {
            this.currentUser.next({
              firebasetoken: user.uid,
              photo: user.photoURL,
              mail: user.email,
              nom,
              prenom
            });
            this.toastrService.info('Vous devez completer votre profile');
            this.router.navigate(['/complete-account']);
          }
        });
      }
    });

    this.isLoggedInObs.subscribe(isLogged => {
      if (isLogged) {
        localStorage?.setItem('isLogged', JSON.stringify(isLogged)),
        console.log(`=========> isLogged [ ${isLogged}]`);
      }
    });
    this.currentRoleObs.subscribe(currentRole => {
      if (currentRole) {
        localStorage?.setItem('currentRole', JSON.stringify(currentRole));
        console.log(`=========> CURRENT ROLE [ ${ currentRole }]`);
      }
    });
    this.currentUserObs.subscribe(currentUser => {
      if (currentUser) {
        localStorage?.setItem('currentUser', JSON.stringify(currentUser));
        console.log(`=========> current User [ ${currentUser}]`);
      }
    });

  }


  GetLoginStatusFromStorage(): void{
    const log = localStorage.getItem('isLogged');
    if (log) {
      const isLog = JSON.parse(log);
      const res = isLog ? this.isLogged.next(isLog) : null;
    }
  }

  GetRoleFromStorage(): void{
    const log = localStorage.getItem('currentRole');
    if (log) {
      const role = JSON.parse(log);
      const res = role ? this.currentRole.next(role) : null;
    }
  }

  GetUserFromStorage(): void{
    const log = localStorage.getItem('currentUser');
    if (log) {
      const user = JSON.parse(log);
      const res = user ? this.currentUser.next(user) : null;
    }
  }

  getUserObject(): (IPersonnel| IContact){
    return this.currentUser.value;
  }

  getUserContact(): any{
    if (this.currentRole.value === Role.Contact) { return this.currentUser.value; }
    return null;
  }

  getUserPesronnel(): any{
    if (this.currentRole.value === Role.Direction || this.currentRole.value === Role.Personnel)
    { return this.currentUser.value; }
    return null;
  }

  getFirebaseUser(): (IFirebaseAccount){
    return this.currentFirebaseAccount.value;
  }

  isAuthenticated(): boolean {
    this.GetUserFromStorage();
    return this.isLogged.getValue();
  }

  currentUserRole(): Role {
    this.GetRoleFromStorage();
    return this.currentRole.getValue();
  }

  ClearStorage(): void{
    localStorage.removeItem('isLogged');
    localStorage.removeItem('currentRole');
    localStorage.removeItem('currentUser');
  }

  SignOut(): Promise<any> {
    return this.afAuth.signOut().then(() => {
      this.ClearStorage();
      this.currentFirebaseAccount.next(null);
      this.isLogged.next(false);
      this.router.navigate(['main-login']);
    });
  }

  async signInWithGoogle(): Promise<boolean> {
    return await this.AuthLogin(new auth.GoogleAuthProvider());
  }

  async signInWithFacebook(): Promise<boolean> {
    return await this.AuthLogin(new auth.FacebookAuthProvider());
  }

  ForgotPassword(passwordResetEmail): void{
    this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
      window.alert(error);
    });
  }

  AuthLogin(provider): Promise<any>{
    return this.afAuth.signInWithPopup(provider)
      .then(async (result) => {
        const user = result.user;
        const [nom, prenom] = user.displayName.split(' ');
        this.accountService.getContactWithToken(user.uid).then(res => {
          this.currentUser.next(res);
          this.currentRole.next(Role.Contact);
          this.isLogged.next(true);
          this.router.navigate(['/contact']);
        }).catch((exp) => {
          if (exp.status === 404) {
            this.currentUser.next({
              firebasetoken: user.uid,
              photo: user.photoURL,
              mail: user.email,
              nom,
              prenom
            });
            this.toastrService.info('Vous devez completer votre profile');
            this.router.navigate(['/complete-account']);
          }
        });
      }).catch(ex => {
        this.toastrService.error(ex?.error, 'Exception While Login');
      });
  }

  SignInWithAccount(username: string, password: string, form): void {
    if (!form.valid) { this.toastrService.warning('username et password sont obligatoire');  return; }
    this.accountService.authenticatePersonnel({mail: username.trim(), password : password.trim()  }).then( (e: IPersonnel) => {
      this.isLogged.next(true);
      this.currentUser.next(e);

      if (e.fonction.trim() === 'directeur'){
        this.currentRole.next(Role.Direction);
        this.router.navigate(['direction']);

      }else {
        this.currentRole.next(Role.Personnel);
        this.router.navigate(['personnel']);
      }
      this.toastrService.success('Athentication Succes!', 'Athentication Succes!');
    }).catch(ex => {
      this.toastrService.error(ex?.error, 'Athentication Error!');
      console.log(ex.error);
    });
  }
}


