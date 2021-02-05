import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IContact} from '../models/Contact';
import {IResidentItem} from '../models/Resident';
import {config} from '../../../environments/config';
import {IRendezVous, RendezVous} from '../../common/interfaces/RendezVous';
import {Observable, throwError} from "rxjs";
import {IPersonnel} from "../models/Personnel";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  constructor(private http: HttpClient) { }


  async deleteRdv(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${config.endpoint}/rendezvous/${id}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  async ajouterrdv(rdv: RendezVous): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${config.endpoint}/rendezvous`, rdv).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  searchByKey(key: string, idrdv?: number): Observable<IPersonnel[]> {
    console.log(idrdv);
    return this.http.get(`${config.endpoint}/rendezvous/${+idrdv}/search/${key.toLowerCase()}`).pipe(
      map((userData: IPersonnel[]) => userData),
      catchError(err => throwError(err))
    );
  }
}
