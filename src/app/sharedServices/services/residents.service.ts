import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {config} from '../../../environments/config';
import {catchError} from 'rxjs/operators';
import {IPersonnel} from '../models/Personnel';
import {IContact} from '../models/Contact';
import {IResident, IResidentItem} from '../models/Resident';
export class Login{
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http: HttpClient) { }

  async getResidentWithName(nom: string, prenom: string): Promise<IResident> {
    return new Promise<IResident>((resolve, reject) => {
      this.http.get<IResident>(`${config.endpoint}/Residents/${nom}/${prenom}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  async saveResident(resident: IResident): Promise<IResident>{
    return new Promise<IResident>((resolve, reject) => {
      this.http.post<IResident>(`${config.endpoint}/residents`, resident).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

}
