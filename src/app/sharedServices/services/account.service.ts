import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {config} from '../../../environments/config';
import {catchError} from 'rxjs/operators';
import {IPersonnel} from '../models/Personnel';
import {IContact} from "../models/Contact";

export class Login{
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  async authenticatePersonnel(login: Login): Promise<IPersonnel> {
    return new Promise<IPersonnel>((resolve, reject) => {
      this.http.post<IPersonnel>(`${config.endpoint}/personnels/athentication`, login).subscribe(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  async getContactWithToken(token: string): Promise<IContact> {
    return new Promise<IContact>((resolve, reject) => {
      this.http.get<IContact>(`${config.endpoint}/contacts/athentication/${token}`).subscribe(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

}
