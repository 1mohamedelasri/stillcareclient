import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile-info-contact',
  templateUrl: './profile-info-contact.component.html',
  styleUrls: ['./profile-info-contact.component.scss']
})

export class ProfileInfoContactComponent implements OnInit {
  contact: object =
    { nom: 'Martin', prenom: 'Julia', mail: 'martin.julia@gmail.com', ntel: '0791916698', statut: 'validé'};

  constructor() { }

  ngOnInit(): void {
  }

  modifiercontact(mail: string, nTel: string): void {
    if (mail === '' || nTel === '') {
      console.log('Mail : ' + mail + '\nnTel : ' + nTel);
      console.log('Please fill all fields');
    } else {
      console.log('MODIFER INFO PERSONNEL');
      console.log('Mail : ' + mail + '\nnTel : ' + nTel);
    }
  }
}
