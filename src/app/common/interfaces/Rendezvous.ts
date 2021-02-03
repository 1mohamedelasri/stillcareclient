import { LocalizedString } from "@angular/compiler";

export interface IRDV {
  idRDV: number;
  idPersonnelCreneau: number;
  idRemplacant: string;
  idContact: number;
  idResident: number;
  dateCreneau: Date;
  dateDebutRDV: Date;
  dateFinRDV: Date;
  statut: string; // Normal à Exceptionnel 
  etat: string; // programmé, validé, terminé, annulé
  idTablette: number;
}


export enum RDVEtat {
  PROGRAMME = "Programmé",
  VALIDE = "Validé",
  ANNULE = "Annulé",
  TERMINE = "Terminé"
}

export enum RDVStatut {
  NORMAL = "Normal",
  EXCEPRIONNEL = "Exceptionnel"
}

//RDV_Etat: string[] = ['Programmé', 'Validé', 'Annulé', 'Terminé'];


