import { LocalizedString } from "@angular/compiler";

export interface ICreneau {
  idPersonnel: number;
  dateDebut: Date;
  etat: string; //disponible, réservé
}