import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import {ResidentService} from '../../sharedServices/services/residents.service';
import {IResident, IResidentResult} from '../../sharedServices/models/Resident';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-consulter-resident',
  templateUrl: './consulter-resident.component.html',
  styleUrls: ['./consulter-resident.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsulterResidentComponent implements OnInit {

  filterValue: string = null;
  dataSource: MatTableDataSource<IResident> = null;
  residentResult: IResidentResult;
  pageEvent: PageEvent;
  displayedColumns: string[] = ['idResident', 'nom', 'prenom', 'statut', 'datenaissance'];

  constructor(private residentService: ResidentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initDataSource();
    this.dataSource = new MatTableDataSource();
  }

  initDataSource(): void{
    this.residentService.findAll(1, 10).pipe(
      map((userData: IResidentResult) => {
        this.dataSource.data = userData.content;
        this.residentResult = userData;
      })
    ).subscribe();
  }

  onPaginateChange(event: PageEvent): void {
    let page = event.pageIndex;
    const size = event.pageSize;


    if (this.filterValue == null) {
      page = page + 1;
      this.residentService.findAll(page, size).pipe(
        map((userData: IResidentResult) => {
          this.dataSource.data = userData.content;
          this.residentResult = userData;
        })
      ).subscribe();
    } else {
      this.residentService.paginateByName(page, size, this.filterValue).pipe(
        map((userData: IResidentResult) => this.residentResult = userData)
      ).subscribe();
    }

  }

  findByName(username: string): void {
    console.log(username);
    this.residentService.paginateByName(0, 10, username).pipe(
      map((userData: IResidentResult) => {
        this.dataSource.data = userData.content;
        this.residentResult = userData;
      })
    ).subscribe();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToProfile(id): void {
    this.router.navigate(['./' + id], {relativeTo: this.activatedRoute});
  }

}
