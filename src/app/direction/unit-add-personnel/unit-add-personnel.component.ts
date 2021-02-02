import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPersonnel } from '../../common/interfaces/Personnel';

const PERSONNEL_DATA: IPersonnel[] = [
  { mail: 'mail1@mail.com', fonction: 'fonction1', ntel: '000000000', idEhpad: 1, login:'login1', nom: 'Nom1', prenom: 'prenom1'},
  { mail: 'mail2@mail.com', fonction: 'fonction2', ntel: '000000000', idEhpad: 1, login:'login2', nom: 'Nom2', prenom: 'prenom2'},
  { mail: 'mail3@mail.com', fonction: 'fonction3', ntel: '000000000', idEhpad: 1, login:'login3', nom: 'Nom3', prenom: 'prenom3'},
  { mail: 'mail4@mail.com', fonction: 'fonction4', ntel: '000000000', idEhpad: 1, login:'login4', nom: 'Nom4', prenom: 'prenom4'},
  { mail: 'mail5@mail.com', fonction: 'fonction1', ntel: '000000000', idEhpad: 1, login:'login5', nom: 'Nom5', prenom: 'prenom5'},
  { mail: 'mail6@mail.com', fonction: 'fonction2', ntel: '000000000', idEhpad: 1, login:'login6', nom: 'Nom6', prenom: 'prenom6'},
  { mail: 'mail7@mail.com', fonction: 'fonction3', ntel: '000000000', idEhpad: 1, login:'login7', nom: 'Nom7', prenom: 'prenom7'},
  { mail: 'mail8@mail.com', fonction: 'fonction4', ntel: '000000000', idEhpad: 1, login:'login8', nom: 'Nom8', prenom: 'prenom8'},
  { mail: 'mail9@mail.com', fonction: 'fonction1', ntel: '000000000', idEhpad: 1, login:'login9', nom: 'Nom9', prenom: 'prenom9'},
  { mail: 'mail10@mail.com', fonction: 'fonction2', ntel: '000000000', idEhpad: 1, login:'login10', nom: 'Nom10', prenom: 'prenom10'}
];

@Component({
  selector: 'app-unit-add-personnel-create',
  templateUrl: './unit-add-personnel.component.html',
  styleUrls: ['./unit-add-personnel.component.scss']
})
export class UnitAddPersonnelComponent implements OnInit {
  
  personnel = PERSONNEL_DATA;
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