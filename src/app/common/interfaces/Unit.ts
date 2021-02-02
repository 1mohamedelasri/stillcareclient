import {IPersonnel} from "../../direction/MockModels/Personnel";

export interface IUnit {
  id:string;
  name:string;
  status:UnitStatus;
  desc:string;
  personnels: IPersonnel[];
}

export enum UnitStatus {
    OUVERTE = "Ouverte",
    FERMEE = "Fermée",
    DEJOUR = "De jour",
    COVID = "Contagieuse COVID"
}
