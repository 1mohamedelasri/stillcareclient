import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelect} from '@angular/material/select';

export interface Rdvs {
  id: string;
  dateDebut: string;
  dateFin: string;
  statut: string;
  etat: string;
  nbInvite: number;
}

@Component({
  selector: 'app-declarer-absence',
  templateUrl: './declarer-absence.component.html',
  styleUrls: ['./declarer-absence.component.scss']
})
export class DeclarerAbsenceComponent implements OnInit {
  selectedRdv: any;
  rdvs = new FormControl();
  rdvList: Rdvs[] = [ { id: 'rdv1', dateDebut: 'debut1', dateFin: 'fin1', statut: 'normal', etat: 'Validé', nbInvite: 1},
    { id: 'rdv2', dateDebut: 'debut2', dateFin: 'fin2', statut: 'normal', etat: 'Validé', nbInvite: 3},
    { id: 'rdv3', dateDebut: 'debut3', dateFin: 'fin3', statut: 'normal', etat: 'Validé', nbInvite: 2},
    { id: 'rdv4', dateDebut: 'debut4', dateFin: 'fin4', statut: 'normal', etat: 'Validé', nbInvite: 0},
    { id: 'rdv5', dateDebut: 'debut5', dateFin: 'fin5', statut: 'normal', etat: 'Validé', nbInvite: 0},
    { id: 'rdv6', dateDebut: 'debut2', dateFin: 'fin2', statut: 'normal', etat: 'Programmé', nbInvite: 0},
    { id: 'rdv7', dateDebut: 'debut3', dateFin: 'fin3', statut: 'normal', etat: 'Programmé', nbInvite: 1},
    { id: 'rdv8', dateDebut: 'debut4', dateFin: 'fin4', statut: 'normal', etat: 'Programmé', nbInvite: 2},
    { id: 'rdv9', dateDebut: 'debut5', dateFin: 'fin5', statut: 'normal', etat: 'Programmé', nbInvite: 0} ];
  constructor() { }

  ngOnInit(): void {
  }

  declarerAbsence(): void {
    if (this.selectedRdv == null) {
      console.log('Please select a rdv');
    } else if (this.selectedRdv.etat === 'Programmé'){
      console.log('Please choose a validated rdv');
    } else{
      console.log('You chose : ' + this.selectedRdv.etat);
    }
  }

  annulerRendezVous() {
    if (this.selectedRdv == null) {
      console.log('Please select a rdv');
    } else if (this.selectedRdv.etat === 'Programmé'){
      console.log('Please choose a validated rdv');
    } else{
      console.log('RDV annulé');
    }
  }
}
