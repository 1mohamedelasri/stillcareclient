import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Rdvs} from '../declarer-absence/declarer-absence.component';

@Component({
  selector: 'app-annuler-rdv',
  templateUrl: './annuler-rdv.component.html',
  styleUrls: ['./annuler-rdv.component.scss']
})
export class AnnulerRdvComponent implements OnInit {
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

  annulerRdv(): void {
    if (this.selectedRdv == null) {
      console.log('Please select a rdv');
    } else if (this.selectedRdv.etat === 'Validé'){
      console.log('You cannot cancel a validated RDV');
    } else{
      console.log('You canceled a programmed RDV' + this.selectedRdv.id);
    }
  }

}
