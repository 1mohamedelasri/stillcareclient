import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.scss']
})

export class PrendreRDVComponent implements OnInit {
  currentRDV =
    {
      dateDebut: new Date('02-03-2021 11:00:00'), dateFin: new Date('02-03-2021 11:30:00'),
      personnel: { personnelNom: 'PersonnelNom', personnelPrenom: 'PersonnelPrenom' },
      contact: { contactNom: 'ContactNom', contactPrenom: 'ContactPrenom' },
      resident: { residentNom: 'ResidentNom', residentPrenom: 'ResidentPrenom' },
      etat: '',
      invites: []
    }

  constructor() { }

  ngOnInit(): void {
  }

  onReserverClick(): void {
    console.log(this.currentRDV.invites);
  }

  onAddInviteClick(nom: string, prenom: string, mail: string) {
    if (nom != "" && prenom != "" && mail != "") {
      this.currentRDV.invites.push({
        inviteNom: nom,
        invitePrenom: prenom,
        inviteMail: mail
      });
      console.log(nom, prenom, mail);
    }
    else {
      console.log("Fill all the fields");
      console.log(nom, prenom, mail);
    }
  }
}
