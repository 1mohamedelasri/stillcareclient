import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-changer-unite',
  templateUrl: './changer-unite.component.html',
  styleUrls: ['./changer-unite.component.scss']
})
export class ChangerUniteComponent implements OnInit {

  unites = new FormControl();
  uniteList: string[] = ['Unité1', 'Unité2', 'Unité3', 'Unité4', 'Unité5'];
  residents = new FormControl();
  residentList: string[] = ['Resident1', 'Resident2', 'Resident3', 'Resident4', 'Resident5', 'Resident6', 'Resident7', '...'];
  selectedResident: string;
  selectedUnite: string;
  personnelList: string[] = ['Personnel1', 'Personnel2', 'Personnel3', 'Personnel4', 'Personnel5'];
  selectedPersonnel: string;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changerUnite() {
    if (this.selectedResident == null || this.selectedPersonnel == null || this.selectedUnite == null) {
      console.log('a field is empty');
    }else{
      console.log('all fields are filled!');
      // tslint:disable-next-line:max-line-length
      console.log('Résident : ' + this.selectedResident + '\n Unité affectée : ' + this.selectedUnite + '\n Responsable : ' + this.selectedPersonnel);
    }
  }

}
