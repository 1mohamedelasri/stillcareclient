export class IResident{
  idResident?: number;
  idPersonnel?: number;
  datenaissance?: Date;
  statut?: string;
  nom: string;
  prenom: string;
  idUnite?: number;
}


export class IResidentItem{
  id?: number;
  nom?: string;
  prenom?: string;
  lienFamille: string;
  isChecked ? = false;

}

