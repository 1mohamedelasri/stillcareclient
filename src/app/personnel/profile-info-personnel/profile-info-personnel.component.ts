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
  selector: 'app-profile-info-personnel',
  templateUrl: './profile-info-personnel.component.html',
  styleUrls: ['./profile-info-personnel.component.scss']
})

export class ProfileInfoPersonnelComponent implements OnInit {
  fonctions = new FormControl();
  fonctionList: string[] = ['Animatrice', 'Aide-soignante', 'Medecin', 'Psychologue', 'Secretaire', 'Soignante'];
  selectedFonction: string;

  personnel: IPersonnel =
    { nom: 'Martin', prenom: 'Julia', mail: 'martin.julia@gmail.com', ntel: '0791916698', login: 'martin.julia', fonction: 'Médicin', idEhpad: 1 };

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
