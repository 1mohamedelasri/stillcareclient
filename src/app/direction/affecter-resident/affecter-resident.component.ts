import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthService} from '../../sharedServices/services/auth.service';
import {IResident} from '../../sharedServices/models/Resident';
import {ToastrService} from 'ngx-toastr';
import {IPersonnel} from '../../sharedServices/models/Personnel';
import {UniteService} from '../../sharedServices/services/unites.service';
import {PersonnelService} from '../../sharedServices/services/personnels.service';
import {ResidentService} from '../../sharedServices/services/residents.service';
import {IUnite} from '../../sharedServices/models/Unite';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-affecter-resident',
  templateUrl: './affecter-resident.component.html',
  styleUrls: ['./affecter-resident.component.scss']
})
export class AffecterResidentComponent implements OnInit {

  unites = new FormControl();
  uniteList: IUnite[] = [];
  residents = new FormControl();
  residentList: IResident[] = [];
  selectedResident: IResident;
  selectedUnite: IUnite;
  personnelList: IPersonnel[] = [];
  selectedPersonnel: IPersonnel;
  constructor(private residentService: ResidentService,
              public personnelService: PersonnelService,
              private uniteService: UniteService,
              private toastrService: ToastrService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.loadResidents();
  }

  loadResidents(){
    this.residentService.getResidentsWithEPHAD(this.auth.getUserPesronnel().idEhpad).then(residents => {
      this.residentList = residents;
    }).catch(ex => {
      this.toastrService.error('encountered error while fetching residents');
      console.log(ex.error);
    });
  }

  onResidentChange(): void {
    this.loadUnite();
  }

  onUniteChange(): void {
    this.loadPersonnel();
  }

  loadUnite(): void {
    this.uniteService.findOtherUniteOfResidentByEphad(this.auth.getUserPesronnel().idEhpad ).then( res => {
      this.uniteList = res;
    }).catch(ex => {
      console.log(ex.error);
    });
  }

  loadPersonnel(): void {
    this.personnelService.findPersonnelByUniteAndEhpad(this.auth.getUserPesronnel().idEhpad, this.selectedUnite.idUnite ).then( res => {
      this.personnelList = res;
    }).catch(ex => {
      console.log(ex.error);
    });
  }


  checkDate(dateNaissance: any) {
    return new DatePipe('en-US').transform(dateNaissance, `${'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''}`);
  }

  // tslint:disable-next-line:typedef
  affecterResident() {
    if (this.selectedResident == null || this.selectedPersonnel == null || this.selectedUnite == null) {
      console.log('a field is empty');
      this.toastrService.warning('vous devez choisir toutes les informations demandées');
    }else{
      console.log('all fields are filled!');
      // tslint:disable-next-line:max-line-length
      const resident: IResident = {
        idResident: this.selectedResident.idResident,
        nom: this.selectedResident.nom,
        prenom: this.selectedResident.prenom,
        datenaissance: this.checkDate(this.selectedResident.datenaissance),
        statut: this.selectedResident.statut, idPersonnel: this.selectedPersonnel.idPersonnel,
        idUnite: this.selectedResident.idUnite
      };
      this.residentService.saveResident(resident).then(result => {
        this.toastrService.success(`Le résident ${result.nom}  ${result.prenom} est enregistré`, 'Enregistrement validé');
      }).catch(exp => {
        this.toastrService.error('Erreur enregistrement du résident', 'Echec enregistrement');
      });
    }
  }
}
