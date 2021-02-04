import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUnit, UnitStatus } from '../../common/interfaces/Unit';
import {IUnite} from '../../sharedServices/models/Unite';
import {UniteService} from '../../sharedServices/services/unites.service';
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../sharedServices/services/auth.service";

enum Mode {
  CREATE,
  UPDATE
}

@Component({
  selector: 'app-unit-create-modify',
  templateUrl: './unit-create-modify.component.html',
  styleUrls: ['./unit-create-modify.component.scss']
})
export class UnitCreateModifyComponent implements OnInit {
  public unitStatus = Object.values(UnitStatus);

  unites: IUnite[] = [];

  unit: IUnite = {idUnite: 0, nom: '', etat: ''};
  currentMode: Mode;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private uniteService: UniteService,
    private toaster: ToastrService,
    private auth: AuthService
  ) { }

  ngOnInit() {

    if (this.router.url.includes('/modifier')) {
      this.currentMode = Mode.UPDATE;
      let id: string;
      this.route.queryParams.subscribe(params => {
        this.unit.idUnite = params.id;
        this.uniteService.getUniteById(this.unit.idUnite).then((unite: IUnite) => {
            this.unit = unite;
            this.unit.idEhpad = this.auth.getUserPesronnel().idEhpad;
        });
      });
    } else if (this.router.url.includes('/creer')) {
      this.currentMode = Mode.CREATE;
    }
  }

  validateOperation(): void{
    this.unit.idEhpad = this.auth.getUserPesronnel().idEhpad;
    if (this.currentMode === Mode.UPDATE) {
      this.uniteService.updateUnite(this.unit.idUnite, this.unit).then(res => {
        console.log(res);
        this.toaster.success('mis à jour effectueé');
        this.onBackButtonClick();
      }).catch(ex => {
        this.toaster.error('echec mis à jour');
        console.log(ex);
      });
    } else {
      this.uniteService.saveUnite(this.unit).then(res => {
        this.toaster.success('unité créé avec succès');
        this.onBackButtonClick();
      }).catch(ex => {
        console.log(ex);
        this.toaster.error('echec mis création');
      });
    }

  }

  onBackButtonClick() {
    if (this.currentMode === Mode.CREATE) {
      this.router.navigate(['direction/unites']);
    } else {
      this.router.navigate(['direction/unites/consulter'], { queryParams: { id: this.unit?.idUnite } } );
    }
  }
}
