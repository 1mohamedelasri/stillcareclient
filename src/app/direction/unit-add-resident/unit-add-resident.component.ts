import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResident } from '../../common/interfaces/Resident';


const RESIDENTS_DATA: IResident[] = [
  {idResident: 1 , idPersonnel: 1, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 2 , idPersonnel: 1, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 3 , idPersonnel: 1, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 4 , idPersonnel: 1, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 5 , idPersonnel: 1, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 6 , idPersonnel: 2, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 7 , idPersonnel: 2, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 8 , idPersonnel: 2, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 9 , idPersonnel: 2, dateNaissance: new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1},
  {idResident: 10 , idPersonnel: 2, dateNaissance:new Date('20/02/1950'), statut: 'actif',  nom: 'Nom1', prenom: 'Prénom1', idUnite: 1}
];

@Component({
  selector: 'app-unit-add-resident-create',
  templateUrl: './unit-add-resident.component.html',
  styleUrls: ['./unit-add-resident.component.scss']
})
export class UnitAddResidentComponent implements OnInit {
  
  residents = RESIDENTS_DATA;
  unitId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.unitId = params['id'];
    });
  }

  onBackButtonClick() {
      this.router.navigate(['direction/unites/consulter'], { queryParams: { id: this.unitId } } );
  }
}