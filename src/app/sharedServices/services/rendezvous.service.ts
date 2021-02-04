import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IContact} from '../models/Contact';
import {IResidentItem} from '../models/Resident';
import {config} from '../../../environments/config';
import {IRendezVous} from '../../common/interfaces/RendezVous';

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
}
