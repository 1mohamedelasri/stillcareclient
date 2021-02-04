import { Component, OnInit } from '@angular/core';
import {IPersonnel} from "../../sharedServices/models/Personnel";
import {FormControl} from "@angular/forms";
import {ReplaySubject, Subject} from "rxjs";
import {PersonnelService} from "../../sharedServices/services/personnels.service";
import {AuthService} from "../../sharedServices/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {debounceTime, delay, filter, map, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.scss']
})
export class ReporterComponent implements OnInit {

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


// ==========================================================================

  /** list of banks */
  protected personnels2: IPersonnel[] = [];

  /** control for the selected Personnel for server side filtering */
  public personnelServerSideCtrl2: FormControl = new FormControl();

  /** control for filter for server side. */
  public personnelServerSideFilteringCtrl2: FormControl = new FormControl();

  /** indicate search operation is in progress */
  public searching2 = false;

  /** list of banks filtered after simulating server side search */
  public  filteredServerSidePersonnel2: ReplaySubject<IPersonnel[]> = new ReplaySubject<IPersonnel[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy2 = new Subject<void>();


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


    // listen for search field value changes
    this.personnelServerSideFilteringCtrl2.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching2 = true),
        takeUntil(this._onDestroy2),
        debounceTime(200),
        map(search => {
          this.persService.searchByKey(search, this.auth.getUserPesronnel()?.idEhpad).pipe(
            map((userData: IPersonnel[]) => {
              if (userData ) {
                this.personnels2 = userData;
              }
            })
          ).subscribe();

          // simulate server fetching and filtering data
          return this.personnels2;
        }),
        delay(500),
        takeUntil(this._onDestroy)
      ).subscribe(filteredPersonnel => {
        this.searching2 = false;
        this.filteredServerSidePersonnel2.next(filteredPersonnel);
      },
      error => {
        // no errors in our simulated example
        this.searching2 = false;
        // handle error...
      });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
    this._onDestroy2.next();
    this._onDestroy2.complete();
  }


  modifierPersonnel(value: any) {

  }
}
