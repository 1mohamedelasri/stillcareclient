import { Component, OnInit } from '@angular/core';
import { loadCldr } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import {DataManager} from '@syncfusion/ej2-data';
declare var require: any;
// @ts-ignore
import * as EJ2_LOCALE from './Translate/fr.json';

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
  public eventObject: EventSettingsModel = {
    dataSource: []
  };
  data;
  constructor() { }

  ngOnInit(): void {
    this.data = this.eventObject.dataSource;
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

}
