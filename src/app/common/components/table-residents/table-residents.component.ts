import { Component, OnInit } from '@angular/core';
import  { PageChangedEvent} from 'ngx-bootstrap/pagination';
import { IResident } from '../../interfaces/Resident';

const RESIDENTS_DATA: IResident[] = [
  {idResident: 1 , idPersonnel: 1, dateNaissance: new Date('06/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 2 , idPersonnel: 1, dateNaissance: new Date('06/12/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 3 , idPersonnel: 1, dateNaissance: new Date('06/20/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 4 , idPersonnel: 1, dateNaissance: new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 5 , idPersonnel: 1, dateNaissance: new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 6 , idPersonnel: 2, dateNaissance: new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 7 , idPersonnel: 2, dateNaissance: new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 8 , idPersonnel: 2, dateNaissance: new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 9 , idPersonnel: 2, dateNaissance: new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 10 , idPersonnel: 2, dateNaissance:new Date('02/06/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1}
];

@Component({
  selector: 'app-residents-table',
  templateUrl: './table-residents.component.html',
  styleUrls: ['./table-residents.component.scss']
})
export class TableResidentsComponent implements OnInit {
  displayedColumns: string[] = ['Nom', 'Prenom', 'Statut', 'Date de naissance'];
  dataSource = RESIDENTS_DATA;
  totalItems: any = 10;
  currentPage: any = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(new Date('12/02/1950'));
  }

  pageChanged($event: PageChangedEvent) {
    this.currentPage = this.currentPage + 1;
  }
}
