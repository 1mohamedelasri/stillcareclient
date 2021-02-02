import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserver-rdv',
  templateUrl: './reserver-rdv.component.html',
  styleUrls: ['./reserver-rdv.component.scss']
})
export class ReserverRdvComponent implements OnInit {
  eventObject: any;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  test(e: any) {
    console.log(typeof e.data[0]);
    if (e.requestType === 'eventChanged') {
      console.log('changed id: ' + e.changedRecords[0].Id + ' value:');
      console.log(e.changedRecords);
    }
    if (e.requestType === 'eventCreated') {
      console.log(' new value: ');
      console.log(e.addedRecords);
    }
    if (e.requestType === 'eventRemoved') {
      console.log(' deleted id: ' + e.deletedRecords[0].Id);
      console.log(e.deletedRecords);
    }
  }

}
