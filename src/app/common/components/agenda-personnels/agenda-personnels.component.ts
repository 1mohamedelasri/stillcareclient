import {Component, OnInit, ViewChild} from '@angular/core';
import {EventRenderedArgs, EventSettingsModel, ScheduleComponent} from '@syncfusion/ej2-angular-schedule';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resident} from '../../interfaces/Resident';
import {Personnel} from '../../interfaces/Personnel';
import {RendezVous} from '../../interfaces/RendezVous';
import {Creneau} from '../../interfaces/Creneau';
import {L10n, loadCldr} from '@syncfusion/ej2-base';
import * as EJ2_LOCALE from '../agenda/Translate/fr.json';




L10n.load({ fr: EJ2_LOCALE.fr });
const endpoint = 'http://localhost:8085/';


@Component({
  selector: 'app-agenda-personnels',
  templateUrl: './agenda-personnels.component.html',
  styleUrls: ['./agenda-personnels.component.scss']
})
export class AgendaPersonnelsComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  constructor(private http: HttpClient) { }
  public eventObject: EventSettingsModel = {
    dataSource: []
  };
  data;
  private residents: Observable<Array<Resident>>;
  private personnels: Observable<Array<Personnel>>;
  isPersonnel = true;

  ngOnInit(): void {
    this.data = this.eventObject.dataSource;
    // TODO change ehpad 1 => ehpad of user logged after implementing authentification of direction
    this.residents = this.http.get<Array<Resident>>(endpoint + 'Residents/ehpad/1' ).pipe();
    this.personnels = this.http.get<Array<Personnel>>(endpoint + 'personnels/ehpad/1' ).pipe();
  }

  // tslint:disable-next-line:typedef
  test(e: any) {
    console.log(typeof e.data[0]);
    if (e.requestType === 'eventChanged') {
      console.log('changed id: ' + e.changedRecords[0].Id + ' value:');
      console.log( e.changedRecords);
    }
    if (e.requestType === 'eventCreated') {
      console.log(' new value: ');
      console.log( e.addedRecords);
    }
    if (e.requestType === 'eventRemoved') {
      console.log(' deleted id: ' + e.deletedRecords[0].Id);
      console.log( e.deletedRecords);
    }
  }
  putResidentToCalendar(e: any): void{
    // tslint:disable-next-line:ban-types
    const data: Array<Object>= new Array<Object>();
    this.http.get<Array<RendezVous>>(endpoint + 'Rendezvous/resident/' + e ).subscribe(value => {
        value.forEach(rdv => {
          data.push({
            id: rdv.idRdv,
            Subject: 'Rendez vous ' + rdv?.etat,
            StartTime: rdv.datedebutRdv ? rdv.datedebutRdv : rdv.dateCreneau,
            // tslint:disable-next-line:max-line-length
            EndTime: rdv.datefinRdv ? rdv.datefinRdv : rdv.datedebutRdv ? new Date(new Date(rdv.datedebutRdv).getTime() + (30 * 60000)) : new Date(new Date(rdv.dateCreneau).getTime() + (30 * 60000)),
            CategoryColor: '#ffaa00',
          });
        });
        this.eventObject = {
          dataSource: data
        };
      }
    );
  }
  putPersonnelToCalendar(e: any): void{
    console.log(e);
    let data: Array<Object>= new Array<Object>();
    this.http.get<Array<RendezVous>>(endpoint + 'Rendezvous/personnel/' + e ).subscribe(value => {
      value.forEach(rdv => {
        data.push({
          id: rdv.idRdv,
          Subject: 'Rendez vous ' + rdv?.etat ,
          StartTime: rdv.datedebutRdv ? rdv.datedebutRdv : rdv.dateCreneau,
          // tslint:disable-next-line:max-line-length
          EndTime: rdv.datefinRdv ? rdv.datefinRdv : rdv.datedebutRdv ? new Date(new Date(rdv.datedebutRdv).getTime() + (30 * 60000)) : new Date(new Date(rdv.dateCreneau).getTime() + (30 * 60000)),
          CategoryColor: '#ffaa00',
        });
      });
      this.http.get<Array<Creneau>>(endpoint + 'creneaux/personnel/sansRdv/' + e ).subscribe(
        val => {
          val.forEach(
            creneau => {
              data.push({
                Subject: 'Creneau sans RDV ' + creneau?.etat  ,
                StartTime: creneau.datedebut,
                // tslint:disable-next-line:max-line-length
                EndTime: new Date(new Date(creneau.datedebut).getTime() + (30 * 60000)) ,
                CategoryColor: '#20a8d8',
              });
            }
          );
          this.eventObject = {
            dataSource: data
          };
        }
      );
    });


  }
  oneventRendered(args: EventRenderedArgs): void {
    let categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.scheduleObj.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }

  switchPersonnel(e: boolean): void{
    if (e !== this.isPersonnel){
      this.isPersonnel = e;
      this.eventObject = {
        dataSource: []
      };
    }

  }
}
