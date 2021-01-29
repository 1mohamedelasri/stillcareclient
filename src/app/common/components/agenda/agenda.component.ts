import { Component, OnInit } from '@angular/core';
import { loadCldr } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';
declare var require: any;
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

  constructor() { }

  ngOnInit(): void {
  }

}
