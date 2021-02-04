import {Component, OnInit, ViewChild} from '@angular/core';
import {EventRenderedArgs, ScheduleComponent, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import {RendezVous} from '../../common/interfaces/RendezVous';
import {Creneau} from '../../common/interfaces/Creneau';
import {L10n, loadCldr} from '@syncfusion/ej2-base';
import * as EJ2_LOCALE from '../../common/components/agenda/Translate/fr.json';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../../sharedServices/services/notification.service';
import {CreneauService} from '../../sharedServices/services/creneau.service';
import {AuthService} from '../../sharedServices/services/auth.service';
import {IPersonnel} from '../../sharedServices/models/Personnel';
import {config} from '../../../environments/config';

declare var require: any;
loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/fr/ca-gregorian.json'),
  require('cldr-data/main/fr/numbers.json'),
  require('cldr-data/main/fr/timeZoneNames.json')
);

L10n.load({ fr: EJ2_LOCALE.fr });

@Component({
  selector: 'app-declarer-creneaux',
  templateUrl: './declarer-creneaux.component.html',
  styleUrls: ['./declarer-creneaux.component.scss']
})
export class DeclarerCreneauxComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;

  eventObject: any;
  toRegister: Array<any> = new Array<any>();
  user: any;
  constructor(private http: HttpClient, private notifyService: NotificationService, private creneauService: CreneauService, private auth: AuthService) { }
  ngOnInit(): void {
    this.user = this.auth.getUserObject();
    this.putPersonnelToCalendar(this.user.idPersonnel);
    this.putPersonnelToCalendar(this.user.idPersonnel);
  }
  // tslint:disable-next-line:typedef
  test(e: any) {
    if (e.requestType === 'eventChanged') {
      console.log('changed id: ' + e.changedRecords[0].Id + ' value:');
      console.log(e.changedRecords);
      console.log(e.changedRecords[0]);
      this.toRegister[this.toRegister.findIndex( i => i.Id === e.changedRecords[0].Id)] = e.changedRecords[0];

    }
    if (e.requestType === 'eventCreated') {
      console.log(' new value: ');
      console.log(e.addedRecords);
      this.toRegister.push(e.addedRecords[0]);
    }
    if (e.requestType === 'eventRemoved') {
      console.log(' deleted id: ' + e.deletedRecords[0].Id);
      console.log(e.deletedRecords);
      this.toRegister = this.toRegister.filter( i => i.Id !== e.deletedRecords[0].Id);
    }
    console.log(this.toRegister);
  }
  putPersonnelToCalendar(e: any): void{
    this.toRegister = new Array<any>();
    console.log(e);
    const data: Array<Object>= new Array<Object>();
    this.http.get<Array<RendezVous>>(config.endpoint + '/rendezvous/personnel/' + e ).subscribe(value => {
      value.forEach(rdv => {
        data.push({
          id: rdv.idRdv,
          Subject: 'Rendez vous ' + rdv?.etat ,
          StartTime: rdv.datedebutRdv ? rdv.datedebutRdv : rdv.dateCreneau,
          // tslint:disable-next-line:max-line-length
          EndTime: rdv.datefinRdv ? rdv.datefinRdv : rdv.datedebutRdv ? new Date(new Date(rdv.datedebutRdv).getTime() + (30 * 60000)) : new Date(new Date(rdv.dateCreneau).getTime() + (30 * 60000)),
          CategoryColor: '#ffaa00',
          IsReadonly: true,
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
                IsReadonly: true,
              });
            }
          );
          const d = new Date('2020-01');
          d.setMonth(new Date().getMonth() + 1);
          d.setFullYear(new Date().getFullYear());
          d.setHours(d.getHours() - 1);
          data.push({
            Subject: 'non autorisé'  ,
            StartTime: new Date(0),
            // tslint:disable-next-line:max-line-length
            EndTime: d ,
            IsBlock: true,
          });
          const c = new Date(d);
          c.setMonth(c.getMonth() + 1);
          data.push({
            Subject: 'non autorisé'  ,
            StartTime: c,
            EndTime: new Date('2220-01') ,
            IsBlock: true,
          });
          this.eventObject = {
            dataSource: data
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
    console.log(args.type);
    if ( args.type === 'Editor'  ) {
      args.cancel = true;
      this.notifyService.showWarning('creation de rendez vous non validé vous pouvez le supprimer et crée en un nouveau' , 'Attention' );
    }
    if (args.type === 'EditEventInfo'){
      this.notifyService.showWarning('cet action n\'est pas encore activer' , 'Attention' );
    }
  }

  enregistrer(): void{
    const c: Creneau[] = this.toRegister.map( elem =>
    {
      return new Creneau(this.user.idPersonnel, elem.StartTime);
    });
    if (c[0]) {
    this.creneauService.enregistrerCreneau(c).then( s => {
      this.putPersonnelToCalendar(this.user.idPersonnel);
      this.notifyService.showSuccess('Rendez-vous enregistré avec succès', 'Enregistrer');
    }).catch(reason => {
      this.putPersonnelToCalendar(this.user.idPersonnel);
      console.log(reason.error);
      this.notifyService.showError(reason.error, 'Erreur d\'enregistrement');
    });
    }else{
      this.notifyService.showInfo('Aucun rendez-vous a enregistrer', 'Enregistrer');
    }

}
  annuler(): void{
    this.toRegister.forEach( elem =>
    {
      this.eventObject.dataSource = this.eventObject.dataSource.filter( i => i.id !== elem.id);
    });
    this.eventObject = {
      dataSource: this.eventObject.dataSource,
    };
    this.toRegister = new Array<any>();
    this.notifyService.showSuccess('Operation annulé avec succès', 'Annuler');

  }
}
