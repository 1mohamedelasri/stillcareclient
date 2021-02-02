import { Component, OnInit } from '@angular/core';
import {Residents} from '../../direction/consulter-resident/consulter-resident.component';
import {IResident} from '../../sharedServices/models/Resident';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-complete-account',
  templateUrl: './complete-account.component.html',
  styleUrls: ['./complete-account.component.scss']
})
export class CompleteAccountComponent implements OnInit {

  residents = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  name = 'TEST';
  animal = 'TEST2';

  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
