import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IResidentItem} from '../../../sharedServices/models/Resident';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AccountService} from '../../../sharedServices/services/account.service';
import {ResidentService} from '../../../sharedServices/services/residents.service';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DialogOverviewComponent implements OnInit {

  public childFrom = new FormGroup({
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required])
  });

  constructor(
    private toastrService: ToastrService,
    private residentService: ResidentService,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public resident: IResidentItem) {}

  Annuler(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {
  }

  Valider(residnet: IResidentItem): void{
    if ( this.childFrom.invalid){
      this.toastrService.warning('Nom et prenom sont obligatoire', 'required fields');
    }else{
      this.residentService.getResidentWithName(residnet.nom.trim(), residnet.prenom.trim()).then(res => {
        const resident: IResidentItem = {nom: res.nom, id: res.idResident, prenom: res.prenom, lienFamille: residnet.lienFamille };
        this.dialogRef.close(resident);
      }).catch(ex => {
        if (ex.status === 404) {
          this.toastrService.error('Resident n\'exite pas ', 'NOT FOUND');
        }
      });
    }
  }
}
