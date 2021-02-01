export interface Iresident{
   idResident: number;
   idPersonnel: number;
   datenaissance: Date;
   statut: string;
   nom: string;
   prenom: string;
   idUnite: number;
}
export class Resident{
  idResident: number;
  idPersonnel: number;
  datenaissance: Date;
  statut: string;
  nom: string;
  prenom: string;
  idUnite: number;
}