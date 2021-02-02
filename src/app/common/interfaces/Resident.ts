export class Resident{
  idResident: number;
  idPersonnel: number;
  datenaissance: Date;
  statut: string;
  nom: string;
  prenom: string;
  idUnite: number;
}

export interface IResident {
  id: string;
  id_personnel: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  statut:string; // actif / ancien
  id_unite: string;
}