import {Component, Inject, OnInit} from '@angular/core';
import {IPersonnel} from '../../../sharedServices/models/Personnel';
import {FormControl} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {PersonnelService} from '../../../sharedServices/services/personnels.service';
import {AuthService} from '../../../sharedServices/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {debounceTime, delay, filter, map, takeUntil, tap} from 'rxjs/operators';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RendezVous} from '../../../common/interfaces/RendezVous';
import {RendezvousService} from "../../../sharedServices/services/rendezvous.service";

@Component({
  selector: 'app-dialog-choix-personnel',
  templateUrl: './dialog-choix-personnel.component.html',
  styleUrls: ['./dialog-choix-personnel.component.scss']
})
export class DialogChoixPersonnelComponent implements OnInit {

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


  constructor(private rendezvousService: RendezvousService, private auth: AuthService, private toast: ToastrService,
              @Inject(MAT_DIALOG_DATA) public rdv: any) { }


  ngOnInit() {

    // listen for search field value changes
    this.personnelServerSideFilteringCtrl.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          this.rendezvousService.searchByKey(search, this.rdv).pipe(
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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


  modifierPersonnel(value: any) {

  }

  Valider(value: any) {
    this.toast.success('personnel choisi');

  }
}
