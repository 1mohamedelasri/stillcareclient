import { Component, OnInit } from '@angular/core';
import {IEtablissement} from '../../interfaces/Etablissement';

@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.scss']
})
export class EtablissementListComponent implements OnInit {
  etablissements: IEtablissement[] = [
    {title: 'EPAD 1 ', desc: 'AAAA NNNNND  D  D DF DF FD REEER ', img: '../../../assets/content/department-1.jpg', personnels: [{name: 'personnel1'}, {name: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'}, {name: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg'}]},
    {title: 'EPAD 2 ', desc: 'AAAA NNNNND  D  D DF DF FD REEER ', img: '../../../assets/content/department-1.jpg', personnels: [{name: 'personnel1'}, {name: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'}, {name: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg'}]},
    {title: 'EPAD 2 ', desc: 'AAAA NNNNND  D  D DF DF FD REEER ', img: '../../../assets/content/department-1.jpg', personnels: [{name: 'personnel1', img: '../../../../assets/content/doctor-400-1.jpg'}, {name: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'}, {name: 'personnel3'}]}];

  constructor() { }

  ngOnInit(): void {
  }

}
