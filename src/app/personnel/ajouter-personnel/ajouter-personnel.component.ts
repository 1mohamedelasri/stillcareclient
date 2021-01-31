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
  fonctionList: string[] = [ 'fonction1', 'fonction2', 'fonction3', '...' ];
  selectedFonction: string;

  constructor() { }
  ajouterPersonnel(nom: string, prenom: string, mail: string, nTel: string): void {
    // tslint:disable-next-line:max-line-length
    console.log('Nom : ' + nom + '\nPrenom : ' + prenom + '\nMail : ' + mail + '\nnTel : ' + nTel + '\nFonciton : ' + this.selectedFonction);
  }
}
