import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgProgress} from 'ngx-progressbar';
import firebase from 'firebase';
import auth = firebase.auth;
import {Role} from '../models/Role';
import {IFirebaseAccount} from '../models/FirebaseAccount';
import {IContact} from '../models/Contact';
import {IPersonnel} from '../models/Personnel';

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
                  public ngProgress: NgProgress
  ) {
    this.RegisterLoginStatusLocally();
    this.RegisterRoleLocally();

    this.afAuth.user.subscribe(async (user) => {

      if (user) {
        this.currentFirebaseAccount.next(user);
        this.isLogged.next(true);
        this.currentRole.next(Role.Contact);
      }
    });
    this.isLoggedInObs.subscribe(isLogged => localStorage?.setItem('isLogged', JSON.stringify(isLogged)));
    this.currentRoleObs.subscribe(currentRole => localStorage?.setItem('currentRole', JSON.stringify(currentRole)));

    this.currentRoleObs.subscribe(e => {
      console.log('CURRENT ROLE');
      console.log(e);
    });

  }

  RegisterLoginStatusLocally(): void{
    const log = localStorage.getItem('isLogged');
    if (log) {
      const isLog = JSON.parse(log);
      this.isLogged.next(isLog);
    }
  }

  RegisterRoleLocally(): void{
    const log = localStorage.getItem('currentRole');
    if (log) {
      const currentRole = JSON.parse(log);
      this.currentRole.next(currentRole);
    }
  }

  getUserObject(): IFirebaseAccount{
    return this.currentFirebaseAccount.value;
  }

  isAuthenticated(): boolean {
    return this.isLogged.getValue();
  }

  currentUserRole(): Role {
    return this.currentRole.getValue();
  }

  SignOut(): Promise<any> {
    return this.afAuth.signOut().then(() => {
      this.currentFirebaseAccount.next(null);
      this.isLogged.next(false);
      localStorage.removeItem('isLogged');
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
      .then((result) => {
        this.currentRole.next(Role.Contact);
        this.isLogged.next(true);
        this.router.navigate(['/contact']);
      });
  }

  SignInWithAccount(): void {
    this.currentRole.next(Role.Personnel);
    this.isLogged.next(true);
    console.log('TRYING TO GET PERSONNEL');
    this.router.navigate(['personnel']);
  }
}


