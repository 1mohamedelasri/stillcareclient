import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-creneaux',
  templateUrl: './planning-creneaux.component.html',
  styleUrls: ['./planning-creneaux.component.scss']
})
export class PlanningCreneauxComponent implements OnInit {
  eventObject: any;

  constructor() { }

  ngOnInit(): void {}
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
