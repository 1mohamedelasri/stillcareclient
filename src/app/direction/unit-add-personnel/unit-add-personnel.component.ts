import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IPersonnel} from '../MockModels/Personnel';
const PERSONNEL_DATA: IPersonnel[] = [
  {surname: 'Nom1', name: 'Nom1',  function: 'Fonction1', mail: 'mail@mail.com'},
  {surname: 'Nom2', name: 'Nom2',  function: 'Fonction2', mail: 'mail@mail.com'},
  {surname: 'Nom3', name: 'Nom3',  function: 'Fonction3', mail: 'mail@mail.com'},
  {surname: 'Nom4', name: 'Nom4',  function: 'Fonction4', mail: 'mail@mail.com'},
  {surname: 'Nom5', name: 'Nom5',  function: 'Fonction5', mail: 'mail@mail.com'},
  {surname: 'Nom6', name: 'Nom6',  function: 'Fonction6', mail: 'mail@mail.com'},
  {surname: 'Nom7', name: 'Nom7',  function: 'Fonction7', mail: 'mail@mail.com'},
  {surname: 'Nom8', name: 'Nom8',  function: 'Fonction8', mail: 'mail@mail.com'},
  {surname: 'Nom9', name: 'Nom9',  function: 'Fonction9', mail: 'mail@mail.com'},
  {surname: 'Nom10', name: 'Nom10', function: 'Fonction10', mail: 'mail@mail.com'}
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
      this.unitId = params.id;
    });
  }

  onBackButtonClick() {
      this.router.navigate(['direction/unites/consulter'], { queryParams: { id: this.unitId } } );
  }
}
