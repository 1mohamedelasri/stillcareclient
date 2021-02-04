import { Component, OnInit } from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {ResidentService} from '../../../sharedServices/services/residents.service';
import {IResident} from "../../../sharedServices/models/Resident";


@Component({
  selector: 'app-residents-table',
  templateUrl: './table-residents.component.html',
  styleUrls: ['./table-residents.component.scss']
})
export class TableResidentsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'statut', 'dateNaissance'];
  dataSource: IResident[] = [];
  totalItems: any = 10;
  currentPage: any = 0;

  constructor(private residentsService: ResidentService) { }

  ngOnInit(): void {
    this.residentsService.currentResidentsObs.subscribe(list => {
      this.dataSource = list;
    });
  }

  pageChanged($event: PageChangedEvent) {
    this.currentPage = this.currentPage + 1;
  }
}
