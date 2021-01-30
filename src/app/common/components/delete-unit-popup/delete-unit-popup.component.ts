import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'delete-unit-popup',
  templateUrl: './delete-unit-popup.component.html',
  styleUrls: ['./delete-unit-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteUnitPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteUnitPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:string}) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm():void {
    this.dialogRef.close(true)
  }
}
