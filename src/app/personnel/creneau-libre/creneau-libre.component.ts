import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creneau-libre',
  templateUrl: './creneau-libre.component.html',
  styleUrls: ['./creneau-libre.component.scss']
})
export class CreneauLibreComponent implements OnInit {
  eventObject: any;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  test(e: any) {
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
