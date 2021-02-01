import { Component, OnInit } from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import { IResident } from '../../interfaces/Resident';

const RESIDENTS_DATA: IResident[] = [
  {id: '1' , id_personnel: '1', nom: 'Nom1', prenom: 'Prénom1', dateNaissance: 'date1', statut: 'actif', id_unite: '1'},
  {id: '2' , id_personnel: '2', nom: 'Nom2', prenom: 'Prénom2', dateNaissance: 'date2', statut: 'actif', id_unite: '2'},
  {id: '3' , id_personnel: '3', nom: 'Nom3', prenom: 'Prénom3', dateNaissance: 'date3', statut: 'actif', id_unite: '3'},
  {id: '4' , id_personnel: '4', nom: 'Nom4', prenom: 'Prénom4', dateNaissance: 'date4', statut: 'actif', id_unite: '4'},
  {id: '5' , id_personnel: '5', nom: 'Nom5', prenom: 'Prénom5', dateNaissance: 'date5', statut: 'actif', id_unite: '5'},
  {id: '6' , id_personnel: '6', nom: 'Nom6', prenom: 'Prénom6', dateNaissance: 'date6', statut: 'actif', id_unite: '1'},
  {id: '7' , id_personnel: '7', nom: 'Nom7', prenom: 'Prénom7', dateNaissance: 'date7', statut: 'actif', id_unite: '2'},
  {id: '8' , id_personnel: '8', nom: 'Nom8', prenom: 'Prénom8', dateNaissance: 'date8', statut: 'actif', id_unite: '3'},
  {id: '9' , id_personnel: '9', nom: 'Nom9', prenom: 'Prénom9', dateNaissance: 'date9', statut: 'actif', id_unite: '4'},
  {id: '10' , id_personnel: '10', nom: 'Nom10', prenom: 'Prénom10', dateNaissance: 'date10', statut: 'actif', id_unite: '5'}
];

@Component({
  selector: 'app-residents-table',
  templateUrl: './table-residents.component.html',
  styleUrls: ['./table-residents.component.scss']
})
export class TableResidentsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'statut', 'dateNaissance'];
  dataSource = RESIDENTS_DATA;
  totalItems: any = 10;
  currentPage: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged($event: PageChangedEvent) {
    this.currentPage = this.currentPage + 1;
  }
}
