import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.component.html',
  styleUrls: ['./modifier-profile.component.scss']
})
export class ModifierProfileComponent implements OnInit {
  fonctions = new FormControl();
  fonctionList: string[] = [ 'Animatrice', 'Aide-soignante', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante' ];
  selectedFonction: string;
  constructor() { }

  ngOnInit(): void {
  }

  modifierPersonnel(mail: string, nTel: string): void {
    // tslint:disable-next-line:max-line-length
    if(mail === '' || nTel === '' || this.selectedFonction == null){
      console.log('please fill all fields');
    }else{
      console.log('MODIFER INFO PERSONNEL');
      console.log('Mail : ' + mail + '\nnTel : ' + nTel + '\nFonciton : ' + this.selectedFonction);
    }
  }

}
