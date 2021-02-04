import {Component, OnInit, ViewChild} from '@angular/core';
import {EventRenderedArgs, PopupOpenEventArgs, ScheduleComponent} from '@syncfusion/ej2-angular-schedule';
import {HttpClient} from '@angular/common/http';
import {RendezVous} from '../../common/interfaces/RendezVous';
import {Creneau} from '../../common/interfaces/Creneau';
import {L10n, loadCldr} from '@syncfusion/ej2-base';
import * as EJ2_LOCALE from '../../common/components/agenda/Translate/fr.json';
import { ToastrService } from 'ngx-toastr';
import {NotificationService} from '../../sharedServices/services/notification.service';
import {RendezvousService} from '../../sharedServices/services/rendezvous.service';
import {CreneauService} from '../../sharedServices/services/creneau.service';
import {config} from '../../../environments/config';
import {Observable} from 'rxjs';
import {Resident} from '../../common/interfaces/Resident';

declare var require: any;
loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/fr/ca-gregorian.json'),
  require('cldr-data/main/fr/numbers.json'),
  require('cldr-data/main/fr/timeZoneNames.json')
);

L10n.load({ fr: EJ2_LOCALE.fr });
const endpoint = 'http://localhost:8085/';
@Component({
  selector: 'app-consulter-creneaux',
  templateUrl: './consulter-creneaux.component.html',
  styleUrls: ['./consulter-creneaux.component.scss']
})
export class ConsulterCreneauxComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  private residents: Observable<Array<Resident>>;
  eventObject: any;
  toRegister: Array<any> = new Array<any>();
  constructor(private http: HttpClient, private notifyService: NotificationService, private rdvService: RendezvousService, private creneauService: CreneauService) { }
  ngOnInit(): void {
    // TODO change id 7 with contact id
    this.residents = this.http.get<Array<Resident>>(config.endpoint + '/residents/contact/7' ).pipe();
  }
  // tslint:disable-next-line:typedef
  test(e: any) {

    if (e.requestType === 'eventRemoved') {
      this.eventObject.dataSource = this.eventObject.dataSource.filter( i => i.id !== e.deletedRecords[0].id);
      this.creneauService.deleteCreneau(e.deletedRecords[0].cr).then( s => {
          this.eventObject = {
            dataSource: this.eventObject.dataSource,
          };
        }).catch(reason => {
          console.log(reason.error);
        });

    }
  }
  putResidentToCalendar(e: any): void{
    let i = 0;
    const data: Array<Object>= new Array<Object>();
    // TODO change 7 with id contact
    this.http.get<Array<RendezVous>>(`${endpoint}rendezvous/resident/${e}/${7}`).subscribe(value => {
      value.forEach(rdv => {
        data.push({
          id: i ,
          Rdv: rdv,
          Subject: 'Rendez vous ' + rdv?.etat ,
          StartTime: rdv.datedebutRdv ? rdv.datedebutRdv : rdv.dateCreneau,
          // tslint:disable-next-line:max-line-length
          EndTime: rdv.datefinRdv ? rdv.datefinRdv : rdv.datedebutRdv ? new Date(new Date(rdv.datedebutRdv).getTime() + (30 * 60000)) : new Date(new Date(rdv.dateCreneau).getTime() + (30 * 60000)),
          CategoryColor: '#ffaa00',
        });
        i++;
      });
      this.http.get<Array<Creneau>>(endpoint + 'creneaux/resident/libre/' + e ).subscribe(
        val => {
          val.forEach(
            creneau => {
              data.push({
                id: i,
                cr: creneau,
                Subject: 'Creneau sans RDV ' + creneau?.etat  ,
                StartTime: creneau.datedebut,
                // tslint:disable-next-line:max-line-length
                EndTime: new Date(new Date(creneau.datedebut).getTime() + (30 * 60000)) ,
                CategoryColor: '#20a8d8',
              });
              i++;
            }
          );
          const d = new Date('2020-01');
          d.setMonth(new Date().getMonth() + 1);
          d.setFullYear(new Date().getFullYear());
          d.setHours(d.getHours() - 1);
          this.eventObject = {
            dataSource: data,
          };
        }
      );
    });
  }
  oneventRendered(args: EventRenderedArgs): void {

    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.scheduleObj.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  onPopupOpen(args: PopupOpenEventArgs): void {
    args.cancel = true;
    console.log(args.data[0].cr);
    if (args.type === 'QuickInfo' && args.data.hasOwnProperty('Subject'))
    {
      this.notifyService.showWarning('cette action n\'est pas autorisé dans cette page' , 'Attention' );
    }
  }

}
