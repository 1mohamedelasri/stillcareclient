import { Component, OnInit } from '@angular/core';
import {DateInput, MomentInputObject} from 'ngx-bootstrap/chronos/test/chain';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-resident',
  templateUrl: './create-resident.component.html',
  styleUrls: ['./create-resident.component.scss']
})
export class CreateResidentComponent implements OnInit {
  selectedStatut: string;
  statuts = new FormControl();
  statutList: string[] = ['Disponible', 'Indisponible', 'Ancien Résident'];

  constructor() { }

  ngOnInit(): void {}

  // Ajouter un resident dans la base de données
  ajouterResident(nom: string, prenom: string, dateNaissance: string): void {
    if(nom === '' || prenom === '' || dateNaissance === '' || this.selectedStatut == null){
      console.log('a field is missing');
    }else{
      console.log('all fields are filled');
      // tslint:disable-next-line:max-line-length
      console.log('Nom : ' + nom + '\n Prenom : ' + prenom + '\n Date de naissance : ' + dateNaissance + '\n Statut : ' + this.selectedStatut);
    }
  }

}
