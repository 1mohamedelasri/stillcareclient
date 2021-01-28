import {IPersonnel} from './Personnel';

export interface IEtablissement {
  title;
  desc;
  img;
  personnels: IPersonnel[];
}
