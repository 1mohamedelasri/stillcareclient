import {Component, OnInit, ViewChild} from '@angular/core';
import { loadCldr } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';
import {View, EventSettingsModel, ScheduleComponent, EventRenderedArgs} from '@syncfusion/ej2-angular-schedule';
import {DataManager} from '@syncfusion/ej2-data';
declare var require: any;
// @ts-ignore
import * as EJ2_LOCALE from './Translate/fr.json';
import {HttpClient} from '@angular/common/http';
import {Resident} from '../../interfaces/Resident';
import {Observable} from 'rxjs';
import {Personnel} from '../../interfaces/Personnel';
import {RendezVous} from '../../interfaces/RendezVous';
import {Creneau} from '../../interfaces/Creneau';
import {config} from '../../../../environments/config';
import {AuthService} from '../../../sharedServices/services/auth.service';

loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/fr/ca-gregorian.json'),
  require('cldr-data/main/fr/numbers.json'),
  require('cldr-data/main/fr/timeZoneNames.json'));

L10n.load({ fr: EJ2_LOCALE.fr });


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})

export class AgendaComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  user: any;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.user = auth.getUserObject();
  }
  public eventObject: EventSettingsModel = {
    dataSource: []
  };
  data;
  private residents: Observable<Array<Resident>>;
  private personnels: Observable<Array<Personnel>>;
  isPersonnel = true;

  ngOnInit(): void {
    this.data = this.eventObject.dataSource;
    this.residents = this.http.get<Array<Resident>>(config.endpoint + '/residents/ehpad/' + this.user.idEhpad ).pipe();
    this.personnels = this.http.get<Array<Personnel>>(config.endpoint + '/personnels/ehpad/' + this.user.idEhpad  ).pipe();
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
    let data: Array<Object>= new Array<Object>();
    this.http.get<Array<RendezVous>>(config.endpoint + '/rendezvous/resident/' + e ).subscribe(value => {
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
    this.http.get<Array<RendezVous>>(config.endpoint + '/rendezvous/personnel/' + e ).subscribe(value => {
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
      this.http.get<Array<Creneau>>(config.endpoint + '/creneaux/personnel/sansRdv/' + e ).subscribe(
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
