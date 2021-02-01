import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-ajouter-personnel',
  templateUrl: './ajouter-personnel.component.html',
  styleUrls: ['./ajouter-personnel.component.scss']
})
export class AjouterPersonnelComponent {
  fonctions = new FormControl();
  fonctionList: string[] = [ 'Animatrice', 'Aide-soignante', 'Directeur', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante' ];
  selectedFonction: string;

  constructor() { }
  ajouterPersonnel(nom: string, prenom: string, mail: string, nTel: string): void {
    if (nom === '' || prenom === '' || mail === '' || nTel === '' || this.selectedFonction == null){
      console.log('please fill all fields');
    }else{
      console.log('all fields are filled');
      // tslint:disable-next-line:max-line-length
      console.log('Nom : ' + nom + '\nPrenom : ' + prenom + '\nMail : ' + mail + '\nnTel : ' + nTel + '\nFonction : ' + this.selectedFonction);
    }
  }
}
