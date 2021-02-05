import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RendezVous} from '../../../common/interfaces/RendezVous';
import {Inviter} from '../../../sharedServices/models/Inviter';

@Component({
  selector: 'app-popup-rdv',
  templateUrl: './popup-rdv.component.html',
  styleUrls: ['./popup-rdv.component.scss']
})
export class PopupRdvComponent implements OnInit {
  childFrom = new FormGroup({
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required])
  });
  value: any = new FormControl();
  inviterList: Inviter [] = [];
  constructor(
    public dialogRef: MatDialogRef<PopupRdvComponent>,
    @Inject(MAT_DIALOG_DATA) public rdv: RendezVous) { }

  ngOnInit(): void {
  }
  Annuler(): void {
    this.dialogRef.close();
  }
  ajouterinviter(inv: Inviter){
    const index = this.inviterList.findIndex( item => item.mail === inv.mail);
    if (index === -1 ){
      this.inviterList.push(inv);
    }else{
      this.inviterList[index] = inv;
    }
    console.log(this.inviterList);
  }
  delete(event: any, year: any): void
  {
    event.preventDefault(); // <--prevent default
    event.stopPropagation();  // stop propagation
    this.inviterList = this.inviterList.filter(x => x.mail !== year.mail); // <--remove the element from data
    /* if (this.value.value ==year)
       this.value.setValue(null) //<--if the value is the remove data, set null*/

  }
}
