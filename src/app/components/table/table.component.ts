import { Component, OnInit } from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';

export interface PeriodicElement {
  ref: string;
  avatar: string;
  name: string;
  mail: string;
  phone: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ref: 'A586486',   avatar: 'assets/img/avatars/1.jpg', name: 'AJCKED', mail: 'H', phone : '+33 7 55664848', status: 'pending', action: 'Accept'},
  {ref: 'A586486',   avatar: 'assets/img/avatars/1.jpg', name: 'AJCKED', mail: 'H', phone : '+33 7 55664848', status: 'pending', action: 'Accept'},
  {ref: 'A586486',   avatar: 'assets/img/avatars/1.jpg', name: 'AJCKED', mail: 'H', phone : '+33 7 55664848', status: 'pending', action: 'Accept'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['reference', 'photo', 'nom', 'mail', 'phone', 'status', 'action'];
  dataSource = ELEMENT_DATA;
  totalItems: any = 10;
  currentPage: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged($event: PageChangedEvent) {
    this.currentPage = this.currentPage + 1;
  }
}
