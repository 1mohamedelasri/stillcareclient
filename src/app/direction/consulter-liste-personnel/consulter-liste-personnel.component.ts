import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Personnel {
  nom: string;
  prenom: string;
  mail: string;
  nTel: string;
  unite: string;
}

const PERSONNELS_DATA: Personnel[] = [
  {nom: 'Nom1', prenom: 'Prénom1', mail: 'date1', nTel: '+33 1 234 567 890', unite: 'Unité1'},
  {nom: 'Nom2', prenom: 'Prénom2', mail: 'date2', nTel: '+33 1 234 567 890', unite: 'Unité2'},
  {nom: 'Nom3', prenom: 'Prénom3', mail: 'date3', nTel: '+33 1 234 567 890', unite: 'Unité3'},
  {nom: 'Nom4', prenom: 'Prénom4', mail: 'date4', nTel: '+33 1 234 567 890', unite: 'Unité4'},
  {nom: 'Nom5', prenom: 'Prénom5', mail: 'date5', nTel: '+33 1 234 567 890', unite: 'Unité5'},
  {nom: 'Nom6', prenom: 'Prénom6', mail: 'date6', nTel: '+33 1 234 567 890', unite: 'Unité1'},
  {nom: 'Nom7', prenom: 'Prénom7', mail: 'date7', nTel: '+33 1 234 567 890', unite: 'Unité2'},
  {nom: 'Nom8', prenom: 'Prénom8', mail: 'date8', nTel: '+33 1 234 567 890', unite: 'Unité3'},
  {nom: 'Nom9', prenom: 'Prénom9', mail: 'date9', nTel: '+33 1 234 567 890', unite: 'Unité4'},
  {nom: 'Nom10', prenom: 'Prénom10', mail: 'date10', nTel: '+33 1 234 567 890', unite: 'Unité5'}
];

@Component({
  selector: 'app-consulter-liste-personnel',
  templateUrl: './consulter-liste-personnel.component.html',
  styleUrls: ['./consulter-liste-personnel.component.scss']
})
export class ConsulterListePersonnelComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'mail', 'nTel'];
  dataSource = PERSONNELS_DATA;

  constructor() { }

  ngOnInit(): void {}

  consulterListePersonnel(): void {
    // tslint:disable-next-line:max-line-length
    console.log('CONSULTER LA LISTE DES PERSONNELS');
  }

}
