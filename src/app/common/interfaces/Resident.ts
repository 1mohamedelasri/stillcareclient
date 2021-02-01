export interface IResident {
  id: string;
  id_personnel: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  statut:string; // actif / ancien
  id_unite: string;
}