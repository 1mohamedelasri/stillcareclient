import {Component, OnInit, ViewChild} from '@angular/core';
import {EventRenderedArgs, PopupOpenEventArgs, ScheduleComponent} from '@syncfusion/ej2-angular-schedule';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../../sharedServices/services/notification.service';
import {RendezvousService} from '../../sharedServices/services/rendezvous.service';
import {CreneauService} from '../../sharedServices/services/creneau.service';
import {AuthService} from '../../sharedServices/services/auth.service';
import {RendezVous} from '../../common/interfaces/RendezVous';
import {config} from '../../../environments/config';
import {Creneau} from '../../common/interfaces/Creneau';
import {DialogOverviewComponent} from '../../views/complete-account/dialog-overview/dialog-overview.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogChoixPersonnelComponent} from "./dialog-choix-personnel/dialog-choix-personnel.component";

@Component({
  selector: 'app-declarer-remplacant',
  templateUrl: './declarer-remplacant.component.html',
  styleUrls: ['./declarer-remplacant.component.scss']
})
export class DeclarerRemplacantComponent implements OnInit {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;

  eventObject: any;
  toRegister: Array<any> = new Array<any>();
  user: any;
  constructor(private http: HttpClient,
              private notifyService: NotificationService,
              public dialog: MatDialog,
              private rdvService: RendezvousService, private creneauService: CreneauService, private auth: AuthService) {
    this.user = auth.getUserObject();
  }

  ngOnInit(): void {
    this.putPersonnelToCalendar(this.user.idPersonnel);
  }
  // tslint:disable-next-line:typedef
  test(e: any) {

    if (e.requestType === 'eventRemoved') {
      this.eventObject.dataSource = this.eventObject.dataSource.filter( i => i.id !== e.deletedRecords[0].id);
      if (e.deletedRecords[0].Rdv){
        this.rdvService.deleteRdv(e.deletedRecords[0].Rdv.idRdv).then( s => {
          this.putPersonnelToCalendar(this.user.idPersonnel);
        }).catch(reason => {
          console.log(reason.error);
        });
      }else{
        this.creneauService.deleteCreneau(e.deletedRecords[0].cr).then( s => {
          this.eventObject = {
            dataSource: this.eventObject.dataSource,
          };
        }).catch(reason => {
          console.log(reason.error);
        });
      }
    }
  }
  putPersonnelToCalendar(e: any): void{
    let i = 0;
    const data: Array<Object> = new Array<Object>();
    this.http.get<Array<RendezVous>>(config.endpoint + '/rendezvous/personnel/' + e ).subscribe(value => {
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
      const d = new Date('2020-01');
      d.setMonth(new Date().getMonth() + 1);
      d.setFullYear(new Date().getFullYear());
      d.setHours(d.getHours() - 1);
      this.eventObject = {
        dataSource: data,
      };
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
    if ((args.type === 'QuickInfo' && !args.data.hasOwnProperty('Subject')) || args.type === 'Editor' || args.type === 'EditEventInfo' ) {
      this.notifyService.showWarning('cette action n\'est pas autorisé dans cette page' , 'Attention' );
    }else{
      const rdv: any = args.data;
      this.openDialog(rdv.Rdv.idRdv);
    }
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogChoixPersonnelComponent, {
      width: '250px',
      data
    });

    dialogRef.afterClosed().subscribe(resident => {
      console.log('The dialog was closed');
      if (resident) {

      }
    });
  }

}
