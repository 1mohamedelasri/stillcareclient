import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-affecter-resident',
  templateUrl: './affecter-resident.component.html',
  styleUrls: ['./affecter-resident.component.scss']
})
export class AffecterResidentComponent implements OnInit {

  unites = new FormControl();
  uniteList: string[] = ['Unité1', 'Unité2', 'Unité3', 'Unité4', 'Unité5'];
  residents = new FormControl();
  residentList: string[] = ['Resident1', 'Resident2', 'Resident3', 'Resident4', 'Resident5', 'Resident6', 'Resident7', '...'];
  selectedResident: string;
  selectedUnite: string;
  constructor() { }

  ngOnInit(): void {
  }

  affecterResident() {
    console.log('Résident : ' + this.selectedResident + '\n Unité affectée : ' + this.selectedUnite);
  }
}