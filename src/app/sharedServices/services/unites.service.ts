import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {config} from '../../../environments/config';
import {catchError} from 'rxjs/operators';
import {IPersonnel} from '../models/Personnel';
import {IContact} from '../models/Contact';
import {IResident, IResidentItem} from '../models/Resident';
import { IUnite} from '../models/Unite';

export class Login{
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UniteService {

  constructor(private http: HttpClient) { }

  async findUnitesByEhpad(idehpad: number): Promise<IUnite[]> {
    return new Promise<IUnite[]>((resolve, reject) => {
      this.http.get<IUnite[]>(`${config.endpoint}/unites/ehpad/${idehpad}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  async findOtherUniteOfResidentByEphad(resident: number, idehpad: number): Promise<IUnite[]> {
    return new Promise<IUnite[]>((resolve, reject) => {
      this.http.get<IUnite[]>(`${config.endpoint}/unites/${resident}/ehpad/${idehpad}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }


  async saveResident(resident: IResident): Promise<IResident>{
    return new Promise<IResident>((resolve, reject) => {
      this.http.post<IResident>(`${config.endpoint}/contacts`, {resident}).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

}
