import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-annule-rendez-vous',
  templateUrl: './annule-rendez-vous.component.html',
  styleUrls: ['./annule-rendez-vous.component.scss']
})
export class AnnuleRendezVousComponent implements OnInit {
  rdvs = new FormControl();
  selectedRdv: any;
  rdvList = [
    {idRdv: 'rdv1', resident: 'res1', contact: 'contact1', date: 'date1'},
    {idRdv: 'rdv2', resident: 'res2', contact: 'contact2', date: 'date2'},
    {idRdv: 'rdv3', resident: 'res3', contact: 'contact3', date: 'date3'},
    {idRdv: 'rdv4', resident: 'res1', contact: 'contact2', date: 'date4'},
    {idRdv: 'rdv5', resident: 'res2', contact: 'contact3', date: 'date5'},
    {idRdv: 'rdv6', resident: 'res3', contact: 'contact2', date: 'date6'},
    {idRdv: 'rdv7', resident: 'res1', contact: 'contact3', date: 'date7'},
    {idRdv: 'rdv8', resident: 'res2', contact: 'contact4', date: 'date8'},
    {idRdv: 'rdv9', resident: 'res3', contact: 'contact1', date: 'date9'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  annulerRdv(): void{
    if (this.selectedRdv == null) {
      console.log('please select a rdv');
    }else{
      console.log('rdv cancelled! \n you need to alert ' + this.selectedRdv.contact + ' and other participants by mail');
    }
  }
}
