import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {PersonnelService} from '../../sharedServices/services/personnels.service';
import {IPersonnel} from '../../sharedServices/models/Personnel';
import {AuthService} from '../../sharedServices/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.scss']
})
export class AjouterPersonnelComponent {
  fonctions = new FormControl();
  fonctionList: string[] = [ 'Animatrice', 'Aide-soignante', 'Directeur', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante' ];
  selectedFonction: string;

  constructor(private personnelService: PersonnelService,
              private route: Router,
              private auth: AuthService,
              private toastrService: ToastrService) { }

  ajouterPersonnel(nom: string, prenom: string, mail: string, ntel: string, login: string, password: string): void {
    if (nom === '' || prenom === '' || mail === '' || ntel === '' || this.selectedFonction == null || login?.length === 0 || password?.length < 4){
      console.log('please fill all fields');
    }else{
      const personnel: IPersonnel = {nom, prenom, mail, ntel, fonction : this.selectedFonction, idEhpad: this.auth.getUserPesronnel().idEhpad, login, password};
      this.personnelService.saveRPersonnel(personnel).then(result => {
        this.toastrService.success('Personnel ajouté avec succès');
        this.route.navigate(['']);
      }).catch(ex => {
        console.log(ex.error);
        this.toastrService.error('Personnel n\'est pas ajouté, lié à un problème technique ');
      });
      console.log('all fields are filled');
      // tslint:disable-next-line:max-line-length
      console.log('Nom : ' + nom + '\nPrenom : ' + prenom + '\nMail : ' + mail + '\nnTel : ' + ntel + '\nFonction : ' + this.selectedFonction + ' login ' + login + ' password ' + password + '  ' + this.auth.getUserPesronnel().idEhpad);
    }
  }
}
