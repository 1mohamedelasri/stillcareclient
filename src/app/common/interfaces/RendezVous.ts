import {Creneau} from './Creneau';

export interface IRendezVous{
  idRdv?: number;
  idRemplacant?: number;
  idContact?: number;
  idResident?: number;
  dateCreneau?: Date;
  datedebutRdv?: Date;
  idTablette?: number;
  datefinRdv?: Date;
  statut?: string;
  etat?: string;
  idPersonnelcreneau?: number;
}
export class RendezVous{
  idRdv?: number;
  idRemplacant?: number;
  idContact?: number;
  idResident?: number;
  dateCreneau?: Date;
  datedebutRdv?: Date;
  idTablette?: number;
  datefinRdv?: Date;
  statut?: string;
  etat?: string;
  idPersonnelcreneau?: number;

  constructor(Cr: Creneau, idcontact: number, idresident: number ) {
    this.idContact = idcontact;
    this.idResident = idresident;
    this.dateCreneau = Cr.datedebut;
    this.idPersonnelcreneau = Cr.idPersonnel;
    this.etat = 'programmé';
    this.statut = 'Normal';
  }
}
