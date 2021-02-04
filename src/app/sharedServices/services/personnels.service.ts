import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {config} from '../../../environments/config';
import {catchError, map} from 'rxjs/operators';
import {IPersonnel} from '../models/Personnel';
import {IContact} from '../models/Contact';
import {IResident, IResidentItem, IResidentResult} from '../models/Resident';
import {IFirebaseAccount} from "../models/FirebaseAccount";
export class Login{
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private currentPersonnel = new BehaviorSubject<IPersonnel[]>( null );
  readonly firebaseAccountObs = this.currentPersonnel.asObservable();

  constructor(private http: HttpClient) { }

  async getPersonnels(ephad: number): Promise<IPersonnel[]> {
    return new Promise<IPersonnel[]>((resolve, reject) => {
      this.http.get<IPersonnel[]>(`${config.endpoint}/personnels/ehpad/${ephad}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  async findPersonnelByUnite(idunite: number): Promise<IPersonnel[]> {
    return new Promise<IPersonnel[]>((resolve, reject) => {
      this.http.get<IPersonnel[]>(`${config.endpoint}/personnels/unites/${idunite}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  async findPersonnelByUniteAndEhpad(idEhpad: number, idUnite: number, ): Promise<IPersonnel[]> {
    return new Promise<IPersonnel[]>((resolve, reject) => {
      this.http.get<IPersonnel[]>(`${config.endpoint}/personnels/ehpad/${idEhpad}/unite/${idUnite}`).subscribe(res => {
        this.currentPersonnel.next(res);
        resolve(res);
      }, err => reject(err));
    });
  }


  async saveRPersonnel(personnel: IPersonnel): Promise<IPersonnel>{
    console.log(personnel);
    return new Promise<IPersonnel>((resolve, reject) => {
      this.http.post<IPersonnel>(`${config.endpoint}/personnels`, personnel).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  searchByKey(key: string, ehpad?: number): Observable<IPersonnel[]> {
    let params = new HttpParams();

    params = params.append('key', key );
    return this.http.get(`${config.endpoint}/personnels/search`, {params}).pipe(
      map((userData: IPersonnel[]) => userData),
      catchError(err => throwError(err))
    );
  }

  async updatePersonnel(personnel: IPersonnel): Promise<IPersonnel>{
    console.log(personnel);
    return new Promise<IPersonnel>((resolve, reject) => {
      this.http.put<IPersonnel>(`${config.endpoint}/personnels`, personnel).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }


}
