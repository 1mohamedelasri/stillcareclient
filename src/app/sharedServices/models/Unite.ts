import {IPersonnel} from '../../direction/MockModels/Personnel';
import {UnitStatus} from '../../common/interfaces/Unit';

export interface IUnit {
  id_unite: string;
  id_Ehpad: string;
  nom: UnitStatus;
  etat: string;
  personnels: IPersonnel[];
}
