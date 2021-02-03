import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {config} from '../../../environments/config';
import {catchError, map} from 'rxjs/operators';
import {IPersonnel} from '../models/Personnel';
import {IContact} from '../models/Contact';
import {IResident, IResidentItem, IResidentResult} from '../models/Resident';
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
      this.http.get<IResident>(`${config.endpoint}/residents/${nom}/${prenom}`).subscribe(res => {
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

  async getResidentsWithEPHAD(idEhpad: number): Promise<IResident[]> {
    return new Promise<IResident[]>((resolve, reject) => {
      this.http.get<IResident[]>(`${config.endpoint}/residents`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  findOne(id: number): Observable<IResident> {
    return this.http.get('/api/users/' + id).pipe(
      map((user: IResident) => user)
    );
  }


  findAll(page: number, size: number): Observable<IResidentResult> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.http.get(`${config.endpoint}/residents`, {params}).pipe(
      map((userData: IResidentResult) => userData),
      catchError(err => throwError(err))
    );
  }


  paginateByName(page: number, size: number, username: string): Observable<IResidentResult> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('username', username);

    return this.http.get(`${config.endpoint}/residents`, {params}).pipe(
      map((userData: IResidentResult) => userData),
      catchError(err => throwError(err))
    );
  }

}
