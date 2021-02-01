import { IPageData } from './page-data';
import { IAppSettings } from './settings';
// @ts-ignore
import { IPatient } from './patient';

export interface IAppState {
  pageData: IPageData;
  appSettings: IAppSettings;
  patients: IPatient[];
}
