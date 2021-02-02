import { Component, OnInit } from '@angular/core';

export interface Contact {
  nom: string;
  prenom: string;
  mail: string;
  resident: string;
  valider: boolean;
}

const CONTACTS_DATA: Contact[] = [
  {nom: 'Nom1', prenom: 'Prénom1', mail: 'nom1prenom1@gmail.com', resident: 'resident1', valider: true},
  {nom: 'Nom2', prenom: 'Prénom2', mail: 'nom2prenom2@gmail.com', resident: 'resident2', valider: true},
  {nom: 'Nom3', prenom: 'Prénom3', mail: 'nom3prenom3@gmail.com', resident: 'resident3', valider: true},
  {nom: 'Nom4', prenom: 'Prénom4', mail: 'nom4prenom4@gmail.com', resident: 'resident1', valider: true},
  {nom: 'Nom5', prenom: 'Prénom5', mail: 'nom5prenom5@gmail.com', resident: 'resident2', valider: true},
  {nom: 'Nom6', prenom: 'Prénom6', mail: 'nom6prenom6@gmail.com', resident: 'resident3', valider: true},
  {nom: 'Nom7', prenom: 'Prénom7', mail: 'nom7prenom7@gmail.com', resident: 'resident1', valider: true},
  {nom: 'Nom8', prenom: 'Prénom8', mail: 'nom8prenom8@gmail.com', resident: 'resident2', valider: true},
  {nom: 'Nom9', prenom: 'Prénom9', mail: 'nom9prenom9@gmail.com', resident: 'resident3', valider: true},
  {nom: 'Nom10', prenom: 'Prénom10', mail: 'nom10prenom10@gmail.com', resident: 'resident1', valider: true},
  {nom: 'Nom11', prenom: 'Prénom11', mail: 'nom11prenom11@gmail.com', resident: 'resident2', valider: true},
  {nom: 'Nom12', prenom: 'Prénom12', mail: 'nom12prenom12@gmail.com', resident: 'resident3', valider: true},
  {nom: 'Nom13', prenom: 'Prénom13', mail: 'nom13prenom13@gmail.com', resident: 'resident1', valider: true},
  {nom: 'Nom14', prenom: 'Prénom14', mail: 'nom14prenom14@gmail.com', resident: 'resident2', valider: true},
  {nom: 'Nom15', prenom: 'Prénom15', mail: 'nom15prenom15@gmail.com', resident: 'resident3', valider: true},
  {nom: 'Nom16', prenom: 'Prénom16', mail: 'nom16prenom16@gmail.com', resident: 'resident1', valider: true},
  {nom: 'Nom17', prenom: 'Prénom17', mail: 'nom17prenom17@gmail.com', resident: 'resident2', valider: true},
  {nom: 'Nom18', prenom: 'Prénom18', mail: 'nom18prenom18@gmail.com', resident: 'resident3', valider: true},
];
@Component({
  selector: 'app-valider-contact',
  templateUrl: './valider-contact.component.html',
  styleUrls: ['./valider-contact.component.scss']
})
export class ValiderContactComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'mail', 'resident', 'valider'];
  dataSource = CONTACTS_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
