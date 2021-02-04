import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {UniteService} from '../../../sharedServices/services/unites.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'delete-unit-popup',
  templateUrl: './delete-unit-popup.component.html',
  styleUrls: ['./delete-unit-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteUnitPopupComponent {

  constructor( private uniteService: UniteService,
               private toast: ToastrService,
               public dialogRef: MatDialogRef<DeleteUnitPopupComponent>,
               @Inject(MAT_DIALOG_DATA) public data: {idUnite: number, nom: string}) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.uniteService.deleteUnite(this.data.idUnite).then(result => {
      console.log(this.data.idUnite);
      this.toast.success('unité supprimeé avec succès');
    }).catch(e => {
      this.toast.error('echec suppression de l\'unité');
      console.log(e.error);
    });
    this.dialogRef.close(true);
  }
}
