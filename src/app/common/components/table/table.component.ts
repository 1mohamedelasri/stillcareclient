import {Component, Input, OnInit} from '@angular/core';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {IUnite} from '../../../sharedServices/models/Unite';
import {PersonnelService} from '../../../sharedServices/services/personnels.service';
import {UniteService} from '../../../sharedServices/services/unites.service';
import {IPersonnel} from '../../../sharedServices/models/Personnel';
import {debuglog} from 'util';
import {ResidentService} from '../../../sharedServices/services/residents.service';

export interface PeriodicElement {
  ref: string;
  avatar: string;
  name: string;
  mail: string;
  phone: string;
  status: string;
  action: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: IPersonnel[] = [];

  displayedColumns: string[] = ['idPersonnel', 'nom', 'prenom', 'mail', 'fonction', 'idEhpad'];
  totalItems: any = 10;
  currentPage: any = 0;

  constructor(    private personnelService: PersonnelService,
                  private uniteService: UniteService,
                  private residentService: ResidentService,

  ) {
  }

  ngOnInit(): void {
     this.personnelService.firebaseAccountObs.subscribe(e => {
       this.data = e;
    });
  }

  pageChanged($event: PageChangedEvent) {
    this.currentPage = this.currentPage + 1;
  }
}
