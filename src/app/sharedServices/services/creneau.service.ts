import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {config} from '../../../environments/config';
import {Creneau} from '../../common/interfaces/Creneau';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  constructor(private http: HttpClient , public datepipe: DatePipe) { }

  async deleteCreneau(cr: Creneau ): Promise<any> {
    let param;
    if (cr.datedebut != null) {
      param = new HttpParams().set('localDate', this.datepipe.transform(cr.datedebut, 'yyyy-MM-dd hh mm ss'));
    }
    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${config.endpoint}/creneaux/data/${cr.idPersonnel}`, {params : param}).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  async enregistrerCreneau(cr: Creneau[] ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${config.endpoint}/creneaux/list`, cr).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
}
