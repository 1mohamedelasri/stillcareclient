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
}
