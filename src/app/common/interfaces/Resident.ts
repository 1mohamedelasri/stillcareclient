export interface IResident{
   idResident: number;
   idPersonnel: number;
   dateNaissance: Date;
   statut: string;
   nom: string;
   prenom: string;
   idUnite: number;
}
export class Resident{
  idResident: number;
  idPersonnel: number;
  dateNaissance: Date;
  statut: string;
  nom: string;
  prenom: string;
  idUnite: number;
}