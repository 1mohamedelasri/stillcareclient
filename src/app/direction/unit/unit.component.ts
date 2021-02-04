import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUnitPopupComponent } from '../../common/components/delete-unit-popup/delete-unit-popup.component';
import {AuthService} from '../../sharedServices/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {IPersonnel} from '../../sharedServices/models/Personnel';
import {IUnite} from "../../sharedServices/models/Unite";
import {ResidentService} from "../../sharedServices/services/residents.service";
import {PersonnelService} from "../../sharedServices/services/personnels.service";
import {UniteService} from "../../sharedServices/services/unites.service";

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  unites: IUnite[] = [];

  unit: IUnite;

  personnels: IPersonnel[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private auth: AuthService,
    private personnelService: PersonnelService,
    private residentsService: ResidentService,
    private uniteService: UniteService,
    private toast: ToastrService

  ) { }

  ngOnInit(): void {
    let id: string;
    this.route.queryParams.subscribe(params => {
      id = params.id;
    });
    this.uniteService.getUniteById(+id).then( ( unite: IUnite) => {
      this.unit = unite;
      this.personnelService.findPersonnelByUniteAndEhpad(this.unit.idEhpad, this.unit.idUnite).then( ( personnels: IPersonnel[]) => {
        this.personnels = personnels;
        console.log(unite);
        console.log(this.personnels);
      }).catch(ex => {
        console.log(ex.error);
      });
      this.residentsService.getResidentsWithEPHADandUnite(unite.idEhpad, unite.idUnite);
    }).catch(ex => {
      this.toast.error('couldn\'t fetch unités data');
      console.log(ex.error);
    });


  }

  goToUnitModification(): void {
    this.router.navigate(['direction/unites/modifier'], { queryParams: { id: this.unit.idUnite } });
  }

  goToUnitDelete(): void {
    this.router.navigate(['direction/unites/supprimer'], { queryParams: { id: this.unit.idUnite } });
  }

  onDeleteUnitClick(): void{
    const dialogRef = this.dialog.open(DeleteUnitPopupComponent, {
      width: '50%',
      data: this.unit
    });
  }

  onAddResidentClick(): void {
    this.router.navigate(['direction/unites/add-resident'], { queryParams: { id: this.unit.idUnite } });
  }

  onAddPersonnelClick(): void {
    this.router.navigate(['direction/unites/add-personnel'], { queryParams: { id: this.unit.idUnite } });
  }
}

