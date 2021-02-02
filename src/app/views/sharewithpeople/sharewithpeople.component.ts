import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
export class User{
  id: number;
  nom: string;
}
@Component({
  selector: 'app-sharewithpeople',
  templateUrl: './sharewithpeople.component.html',
  styleUrls: ['./sharewithpeople.component.scss']
})
export class SharewithpeopleComponent implements OnInit {

  constructor() {
  }

  selectedUsers = [];
  public users = [];


  // tslint:disable-next-line:typedef
  ngOnInit() {
    let i = 0;
    while (i < 10) {
      this.users.push({id: 0, nom: 'test'});
      i++;
    }
  }

}
