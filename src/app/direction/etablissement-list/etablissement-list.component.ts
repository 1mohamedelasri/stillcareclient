import { Component, OnInit } from '@angular/core';
import {IEtablissement} from '../../common/interfaces/Etablissement';

@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.scss']
})
export class EtablissementListComponent implements OnInit {
  etablissements: IEtablissement[] = [
    {title: 'EPAD 1 ', desc: 'AAAA NNNNND  D  D DF DF FD REEER ', img: '../../../assets/content/department-1.jpg', personnels: [{nom: 'personnel1'}, {nom: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'}, {nom: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg'}]},
    {title: 'EPAD 2 ', desc: 'AAAA NNNNND  D  D DF DF FD REEER ', img: '../../../assets/content/department-1.jpg', personnels: [{nom: 'personnel1'}, {nom: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'}, {nom: 'personnel3', img: '../../../../assets/content/doctor-400-1.jpg'}]},
    {title: 'EPAD 2 ', desc: 'AAAA NNNNND  D  D DF DF FD REEER ', img: '../../../assets/content/department-1.jpg', personnels: [{nom: 'personnel1', img: '../../../../assets/content/doctor-400-1.jpg'}, {nom: 'personnel2', img: '../../../../assets/content/doctor-400-1.jpg'}, {nom: 'personnel3'}]}];

  constructor() { }

  ngOnInit(): void {
  }

}
