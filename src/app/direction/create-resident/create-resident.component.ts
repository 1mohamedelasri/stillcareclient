import { Component, OnInit } from '@angular/core';
import {DateInput, MomentInputObject} from 'ngx-bootstrap/chronos/test/chain';
import {FormControl, Validators} from '@angular/forms';
import {PersonnelService} from '../../sharedServices/services/personnels.service';
import {AuthService} from '../../sharedServices/services/auth.service';
import {ResidentService} from '../../sharedServices/services/residents.service';
import {IResident} from '../../sharedServices/models/Resident';
import {IPersonnel} from '../../common/interfaces/Personnel';
import {IUnite} from '../../sharedServices/models/Unite';
import {UniteService} from '../../sharedServices/services/unites.service';
import {ToastrService} from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-resident',
  templateUrl: './create-resident.component.html',
  styleUrls: ['./create-resident.component.scss']
})
export class CreateResidentComponent implements OnInit {
  statuts = new FormControl();
  personnels = new FormControl();
  unites =  new FormControl();

  selectedStatut: string;
  selectedPersonnel: IPersonnel;
  selectedunite: IUnite;

  statutList: string[] = ['Disponible', 'Indisponible', 'Ancien Résident'];
  personnelList: IPersonnel[] = [];
  uniteLists: IUnite[] = [];

  constructor(public personnelService: PersonnelService,
              private residentService: ResidentService,
              private uniteService: UniteService,
              private toastrService: ToastrService,
              public auth: AuthService) { }

   ngOnInit(): void {
     this.loadUnite();

  }

  loadUnite(): void {
    this.uniteService.findUnitesByEhpad(this.auth.getUserPesronnel().idEhpad).then( res => {
      this.uniteLists = res;
    }).catch(ex => {
      console.log(ex.error);
    });
  }

  onChangeItem(): void {
    console.log(this.selectedunite);

    this.personnelService.findPersonnelByUnite(this.selectedunite.idUnite).then(
      result => {
        this.personnelList  = result;
      }
    ).catch(ex => {
      console.log(ex.error);
    });
  }

  checkDate(dateNaissance: any) {
    return new DatePipe('en-US').transform(dateNaissance, `${'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''}`);
  }

  // Ajouter un resident dans la base de données
  // tslint:disable-next-line:typedef
  async ajouterResident(nom: string, prenom: string, dateNaissance: string) {
    if (!nom) {
      this.toastrService.warning('vous devez saisir le nom');
    }
    if (!prenom) {
      this.toastrService.warning('vous devez saisir le nom');
    }

    if (nom === '' || prenom === '' || dateNaissance === '' || this.selectedStatut == null) {
      console.log('a field is missing');
    } else {
      const resident: IResident = {
        nom,
        prenom,
        datenaissance: this.checkDate(dateNaissance),
        statut: this.selectedStatut, idPersonnel: this.selectedPersonnel.idPersonnel,
        idUnite: this.selectedunite.idUnite
      };
      this.residentService.saveResident(resident).then(result => {
         this.toastrService.success(`Le résident ${result.nom}  ${result.prenom} est enregistré`, 'Enregistrement validé');
       }).catch(exp => {
        this.toastrService.error('Erreur enregistrement du résident', 'Echec enregistrement');
      });
    }
  }

}
