import { Component, OnInit } from '@angular/core';

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
  invite : Object [];
}

const RDV_DATA: RDV[] = [
  {
    idRDV: 1, idPersonnelCreneau: 1, idRemplacant: null, contactNom: "ContactNom1", contactPrenom: "ContactPrenom1", residentNom: 'ResidNom1', residentPrenom: 'ResidPrenom1',
    dateCreneau: new Date('02-03-2021 11:00:00'), statut: 'Normal', etat: 'Programmé',
    invite: [{ inviteNom: 'InviteNom1', invitePrenom: 'InvitePrenom1' }, { inviteNom: 'InviteNom2', invitePrenom: 'InvitePrenom2' }]
  },

  {
    idRDV: 2, idPersonnelCreneau: 1, idRemplacant: null, contactNom: "ContactNom2", contactPrenom: "ContactPrenom2", residentNom: 'ResidNom2', residentPrenom: 'ResidPrenom2',
    dateCreneau: new Date('02-03-2021 12:00:00'), statut: 'Normal', etat: 'programmé',
    invite: [{ inviteNom: 'InviteNom1', invitePrenom: 'InvitePrenom1' }, { inviteNom: 'InviteNom2', invitePrenom: 'InvitePrenom2' }]
  },

  {
    idRDV: 3, idPersonnelCreneau: 1, idRemplacant: null, contactNom: "ContactNom3", contactPrenom: "ContactPrenom3", residentNom: 'ResidNom3', residentPrenom: 'ResidPrenom3',
    dateCreneau: new Date('02-03-2021 13:00:00'), statut: 'Normal', etat: 'programmé', 
    invite: []
  },

  {
    idRDV: 4, idPersonnelCreneau: 1, idRemplacant: null, contactNom: "ContactNom1", contactPrenom: "ContactPrenom1", residentNom: 'ResidNom1', residentPrenom: 'ResidPrenom1',
    dateCreneau: new Date('02-04-2021 11:00:00'), statut: 'Normal', etat: 'programmé',
    invite: [{ inviteNom: 'InviteNom1', invitePrenom: 'InvitePrenom1' }]
  },

  {
    idRDV: 5, idPersonnelCreneau: 1, idRemplacant: null, contactNom: "ContactNom2", contactPrenom: "ContactPrenom2", residentNom: 'ResidNom2', residentPrenom: 'ResidPrenom2',
    dateCreneau: new Date('02-04-2021 12:00:00'), statut: 'Normal', etat: 'programmé',
    invite: []
  },
];

@Component({
  selector: 'app-valider-reservation',
  templateUrl: './valider-reservation.component.html',
  styleUrls: ['./valider-reservation.component.scss']
})
export class ValiderReservationComponent implements OnInit {
  displayedColumns: string[] = ['Date debut', 'Resident', 'Contact', 'Invite', 'Action'];
  dataSource = RDV_DATA;

  constructor() { }
  ngOnInit(): void { }

  validerRDV(): void {
    console.log('Réservation validée');
  }

  refuserRDV(): void {
    console.log('Réservation refusée');
  }
}
