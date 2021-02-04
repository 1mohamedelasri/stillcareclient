import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../sharedServices/services/auth.service';
import {UniteService} from '../../sharedServices/services/unites.service';
import {IUnite} from '../../sharedServices/models/Unite';
import {ToastrService} from 'ngx-toastr';
import {PersonnelService} from '../../sharedServices/services/personnels.service';
import {IPersonnel} from '../../sharedServices/models/Personnel';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})

export class UnitListComponent implements OnInit{

  images: string[] = [
    '../../../../assets/content/doctor-400-4.jpg',
  '../../../../assets/content/doctor-400-5.jpg',
  '../../../../assets/content/doctor-400-6.jpg',
  '../../../../assets/content/doctor-400-1.jpg',
  '../../../../assets/content/doctor-400-5.jpg',
  '../../../../assets/content/doctor-400-3.jpg',
  '../../../../assets/content/doctor-400-4.jpg',
  '../../../../assets/content/doctor-400-5.jpg'];

  unites: IUnite[] = [];

    constructor(private router: Router,
                private auth: AuthService,
                private personnelService: PersonnelService,
                private uniteService: UniteService,
                private toast: ToastrService) { }

  goToUnit(uniteId): void {
    this.router.navigate(['direction/unites/consulter'], { queryParams: { id: uniteId } });
  }

  goToUnitCreation(): void {
    this.router.navigate(['direction/unites/creer']);
  }

  ngOnInit(): void {
       this.uniteService.findUnitesByEhpad(this.auth.getUserPesronnel().idEhpad).then( ( unities: IUnite[]) => {
         this.unites = unities;
       }).catch(ex => {
         this.toast.error('couldn\'t fetch unités data');
         console.log(ex.error);
       });
  }
}
