import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.scss']
})
export class EtablissementComponent implements OnInit {

  @Input() etablissement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
