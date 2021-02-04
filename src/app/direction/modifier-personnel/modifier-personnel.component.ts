import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {IPersonnel} from '../../sharedServices/models/Personnel';
import {ReplaySubject, Subject} from 'rxjs';
import {debounceTime, delay, filter, map, takeUntil, tap} from 'rxjs/operators';
import {IResidentResult} from '../../sharedServices/models/Resident';
import {PersonnelService} from '../../sharedServices/services/personnels.service';
import {AuthService} from '../../sharedServices/services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.scss']
})
export class ModifierPersonnelComponent implements OnInit {

  fonctions = new FormControl();
  fonctionList: string[] = [ 'Animatrice', 'Aide-soignante', 'Directeur', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante' ];
  selectedFonction: string;

  /** list of banks */
  protected personnels: IPersonnel[] = [];

  /** control for the selected Personnel for server side filtering */
  public personnelServerSideCtrl: FormControl = new FormControl();

  /** control for filter for server side. */
  public personnelServerSideFilteringCtrl: FormControl = new FormControl();

  /** indicate search operation is in progress */
  public searching = false;

  /** list of banks filtered after simulating server side search */
  public  filteredServerSidePersonnel: ReplaySubject<IPersonnel[]> = new ReplaySubject<IPersonnel[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor(private persService: PersonnelService, private auth: AuthService, private toast: ToastrService) { }


  ngOnInit() {

    // listen for search field value changes
    this.personnelServerSideFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          this.persService.searchByKey(search, this.auth.getUserPesronnel()?.idEhpad).pipe(
            map((userData: IPersonnel[]) => {
              if (userData ) {
                this.personnels = userData;
              }
            })
          ).subscribe();

          // simulate server fetching and filtering data
          return this.personnels;
        }),
        delay(500),
        takeUntil(this._onDestroy)
      ).subscribe(filteredPersonnel => {
          this.searching = false;
          this.filteredServerSidePersonnel.next(filteredPersonnel);
        },
        error => {
          // no errors in our simulated example
          this.searching = false;
          // handle error...
        });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  modifierPersonnel(mail: string, nTel: string, personnel: IPersonnel): void {
    if (personnel) {
    personnel.mail = mail;
    personnel.ntel = nTel;

    this.persService.updatePersonnel(personnel)
      .then(e => this.toast.show('les informations sont mises à jour avec succes'))
      .catch(e => this.toast.error('les informations ne sont pas enregistré à cause d\'un problème technique'));
    }else {
      this.toast.warning('veulliez selectionner un personnel');
    }
  }


}
