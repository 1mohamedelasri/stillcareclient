import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.scss']
})
export class ModifierPersonnelComponent implements OnInit {

  fonctions = new FormControl();
  fonctionList: string[] = [ 'Animatrice', 'Aide-soignante', 'Directeur', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante' ];
  selectedFonction: string;
  constructor() { }

  ngOnInit(): void {}

  modifierPersonnel(mail: string, nTel: string): void {
    // tslint:disable-next-line:max-line-length
    console.log('MODIFER INFO PERSONNEL');
    console.log('Mail : ' + mail + '\nnTel : ' + nTel + '\nFonciton : ' + this.selectedFonction);
  }

}
