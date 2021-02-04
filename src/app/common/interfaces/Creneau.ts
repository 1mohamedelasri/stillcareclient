export class Creneau{
    idPersonnel: number;
    datedebut: Date;
    etat: string;
    constructor(idPersonne: number, datedebut: Date) {
      this.idPersonnel = idPersonne;
      this.datedebut = datedebut;
      this.etat = 'disponible';
    }
}
