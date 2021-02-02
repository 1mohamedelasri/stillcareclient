import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Residents} from '../declarer-residents/declarer-residents.component';
import {useFormControl} from '@material-ui/core';

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
  selector: 'app-changement-statut-resident',
  templateUrl: './changement-statut-resident.component.html',
  styleUrls: ['./changement-statut-resident.component.scss']
})
export class ChangementStatutResidentComponent implements OnInit {
  residents = new FormControl();
  selectedResident: any;
  residentList = RESIDENTS_DATA;
  statuts = new FormControl();
  selectedStatut: any;
  statutList = ['Ancien résident', 'Disponible', 'Indisponible', 'Décédé']
  constructor() { }
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  changerStatut() {
    if (this.selectedResident == null ){
      console.log('Please select a résident!');
    }else if (this.selectedStatut == null){
      console.log('Please select a statut!');
    }else{
      console.log('Resident statut changed successfully!');
      if ( this.selectedStatut === 'Décédé'){
        console.log('resident has passed away, no mail will be sent to anyone, but rdv will be canceled');
      }else{
        console.log('Cancel rdv and send mails to participants in case statut is "indiponible" ou "ancien resident"');
      }
    }
  }
}
