import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface IPersonnel {
  nom: string;
  prenom: string;
  mail: string;
  ntel: string;
  login: string;
  fonction: string;
  idEhpad: number;
}

@Component({
  selector: 'app-profile-info-direct',
  templateUrl: './profile-info-direct.component.html',
  styleUrls: ['./profile-info-direct.component.scss']
})
export class ProfileInfoDirectionComponent implements OnInit {
  fonctions = new FormControl();
  fonctionList: string[] = ['Animatrice', 'Aide-soignante', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante'];
  selectedFonction: string;

  personnel: IPersonnel =
    { nom: 'Flamant', prenom: 'Mathis', mail: 'flamant.mathis@gmail.com', ntel: '0617889079', login: 'flamant.mathis', fonction: 'Directeur', idEhpad: 1 };

  constructor() { }

  ngOnInit(): void {
  }

  modifierPersonnel(mail: string, nTel: string): void {
    if (mail === '' || nTel === '' || this.selectedFonction == null) {
      console.log('Mail : ' + mail + '\nnTel : ' + nTel + '\nFonction : ' + this.selectedFonction);
      console.log('Please fill all fields');
    } else {
      console.log('MODIFER INFO PERSONNEL');
      console.log('Mail : ' + mail + '\nnTel : ' + nTel + '\nFonction : ' + this.selectedFonction);
    }
  }
}