import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Residents } from '../declarer-residents/declarer-residents.component';
import { useFormControl } from '@material-ui/core';

export interface IPersonnel {
  nom: string;
  prenom: string;
  idunite: number
}

const PERSONNELS_DATA: IPersonnel[] = [
  { nom: 'Nom1', prenom: 'Prénom1', idunite: 1 },
  { nom: 'Nom2', prenom: 'Prénom2', idunite: 2 },
  { nom: 'Nom3', prenom: 'Prénom3', idunite: 3 },
  { nom: 'Nom4', prenom: 'Prénom4', idunite: 1 },
  { nom: 'Nom5', prenom: 'Prénom5', idunite: 2 },
  { nom: 'Nom6', prenom: 'Prénom6', idunite: 3 },
  { nom: 'Nom7', prenom: 'Prénom7', idunite: 1 },
  { nom: 'Nom8', prenom: 'Prénom8', idunite: 2 },
  { nom: 'Nom9', prenom: 'Prénom9', idunite: 3 }
];

export interface RDV {
  idRDV: number;
  idPersonnelCreneau: number;
  idRemplacant: number,
  contactNom: string;
  contactPrenom: string;
  residentNom: string,
  residentPrenom: string,
  dateCreneau: Date;
  statut: string;
  etat: string;
  invite: Object[];
}

const currentRDV: RDV =
{
  idRDV: 1, idPersonnelCreneau: 1, idRemplacant: null, contactNom: "ContactNom1", contactPrenom: "ContactPrenom1", residentNom: 'ResidNom1', residentPrenom: 'ResidPrenom1',
  dateCreneau: new Date('02-03-2021 11:00:00'), statut: 'Normal', etat: 'Programmé',
  invite: [{ inviteNom: 'InviteNom1', invitePrenom: 'InvitePrenom1' }, { inviteNom: 'InviteNom2', invitePrenom: 'InvitePrenom2' }]
};

@Component({
  selector: 'app-reporter-rdv',
  templateUrl: './reporter-rdv.component.html',
  styleUrls: ['./reporter-rdv.component.scss']
})
export class ReporterRDVComponent implements OnInit {
  remplacants = new FormControl();
  selectedRemplacant:IPersonnel;
  personnelList = PERSONNELS_DATA;

  constructor() { }
  ngOnInit(): void { }

  reporterRDV() {
    if (this.selectedRemplacant == null)
      console.log('Please select a person!');
    else {
      console.log('RDV a été reporté !');
      console.log("Verify that two persons are of a same unit and a remplacant doesn't have a meeting at the same time!");
    }
  }
}