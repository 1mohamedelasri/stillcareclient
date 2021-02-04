import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
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

  private currentResidents = new BehaviorSubject<IResident[]>( null );
  readonly currentResidentsObs = this.currentResidents.asObservable();


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
        this.currentResidents.next(res);
        resolve(res);
      }, err => reject(err));
    });
  }

  async getResidentsWithEPHADandUnite(idEhpad: number, idUnite: number): Promise<IResident[]> {
    return new Promise<IResident[]>((resolve, reject) => {
      this.http.get<IResident[]>(`${config.endpoint}/residents/ephad/${idEhpad}/unite/${idUnite}`).subscribe(res => {
        this.currentResidents.next(res);
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

    return this.http.get(`${config.endpoint}/residents/pages`, {params}).pipe(
      map((userData: IResidentResult) => userData),
      catchError(err => throwError(err))
    );
  }


  async paginateByName(page: number, size: number, username: string): Promise<IResidentResult> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('username', username);

    return new Promise<IResidentResult>((resolve, reject) => {
      this.http.get<IResidentResult>(`${config.endpoint}/residents`, {params}).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }


}
