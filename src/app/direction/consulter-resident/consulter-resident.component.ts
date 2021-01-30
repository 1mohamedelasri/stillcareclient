import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';


export interface Residents {
  nom: string;
  prenom: string;
  dateNaissance: string;
  unite: string;
}

const RESIDENTS_DATA: Residents[] = [
  {nom: 'Nom1', prenom: 'Prénom1', dateNaissance: 'date1', unite: 'Unité1'},
  {nom: 'Nom2', prenom: 'Prénom2', dateNaissance: 'date2', unite: 'Unité2'},
  {nom: 'Nom3', prenom: 'Prénom3', dateNaissance: 'date3', unite: 'Unité3'},
  {nom: 'Nom4', prenom: 'Prénom4', dateNaissance: 'date4', unite: 'Unité4'},
  {nom: 'Nom5', prenom: 'Prénom5', dateNaissance: 'date5', unite: 'Unité5'},
  {nom: 'Nom6', prenom: 'Prénom6', dateNaissance: 'date6', unite: 'Unité1'},
  {nom: 'Nom7', prenom: 'Prénom7', dateNaissance: 'date7', unite: 'Unité2'},
  {nom: 'Nom8', prenom: 'Prénom8', dateNaissance: 'date8', unite: 'Unité3'},
  {nom: 'Nom9', prenom: 'Prénom9', dateNaissance: 'date9', unite: 'Unité4'},
  {nom: 'Nom10', prenom: 'Prénom10', dateNaissance: 'date10', unite: 'Unité5'}
];

@Component({
  selector: 'app-consulter-resident',
  templateUrl: './consulter-resident.component.html',
  styleUrls: ['./consulter-resident.component.scss']
})
export class ConsulterResidentComponent {
  displayedColumns: string[] = ['nom', 'prenom', 'dateNaissance'];
  dataSource = RESIDENTS_DATA;
  unites = new FormControl();
  uniteList: string[] = ['Unité1', 'Unité2', 'Unité3', 'Unité4', 'Unité5'];
  selectedUnite: string;

  constructor() { }

  // Choisir unité pour lister ces residents
  choisirUnite(): void {
    console.log('Unité choisi : ' + this.selectedUnite);
  }
}
