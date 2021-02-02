import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Residents {
  nom: string;
  prenom: string;
  dateNaissance: string;
  unite: string;
  associe: boolean
}

const RESIDENTS_DATA: Residents[] = [
  {nom: 'Nom1', prenom: 'Prénom1', dateNaissance: 'date1', unite: 'Unité1', associe: true},
  {nom: 'Nom2', prenom: 'Prénom2', dateNaissance: 'date2', unite: 'Unité2', associe: false},
  {nom: 'Nom3', prenom: 'Prénom3', dateNaissance: 'date3', unite: 'Unité3', associe: true},
  {nom: 'Nom4', prenom: 'Prénom4', dateNaissance: 'date4', unite: 'Unité4', associe: false},
  {nom: 'Nom5', prenom: 'Prénom5', dateNaissance: 'date5', unite: 'Unité5', associe: true},
  {nom: 'Nom6', prenom: 'Prénom6', dateNaissance: 'date6', unite: 'Unité1', associe: false},
  {nom: 'Nom7', prenom: 'Prénom7', dateNaissance: 'date7', unite: 'Unité2', associe: true},
  {nom: 'Nom8', prenom: 'Prénom8', dateNaissance: 'date8', unite: 'Unité3', associe: false},
  {nom: 'Nom9', prenom: 'Prénom9', dateNaissance: 'date9', unite: 'Unité4', associe: true},
  {nom: 'Nom10', prenom: 'Prénom10', dateNaissance: 'date10', unite: 'Unité5', associe: false}
];

@Component({
  selector: 'app-declarer-residents',
  templateUrl: './declarer-residents.component.html',
  styleUrls: ['./declarer-residents.component.scss']
})
export class DeclarerResidentsComponent implements OnInit {
  residents = new FormControl();
  selectedResident: any;
  residentList = RESIDENTS_DATA;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  associerResident() {
    if (this.selectedResident == null ){
      console.log('Please select a résident!');
    }else if (this.selectedResident.associe === true){
      console.log('Selected resident already associated to a personnel!');
    }else{
      console.log('Resident associated successfully!');
      this.selectedResident.associe = true;
    }
  }
}
