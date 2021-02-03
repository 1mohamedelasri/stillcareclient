import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { IResidentItem} from '../../sharedServices/models/Resident';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogOverviewComponent} from './dialog-overview/dialog-overview.component';
import {ToastrService} from 'ngx-toastr';
import {AccountService} from '../../sharedServices/services/account.service';
import {IContact} from '../../sharedServices/models/Contact';
import {AuthService} from '../../sharedServices/services/auth.service';
import {Router} from '@angular/router';
import {NGXLogger} from 'ngx-logger';
@Component({
  selector: 'app-complete-account',
  templateUrl: './complete-account.component.html',
  styleUrls: ['./complete-account.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompleteAccountComponent implements OnInit {


  constructor(public dialog: MatDialog,
              private toastrService: ToastrService,
              private accountService: AccountService,
              private authService: AuthService,
              private route: Router,
              private logger: NGXLogger
              ) {
  }

  residentList: IResidentItem[] = [];

  selectedResidents: IResidentItem[] = [];

  form = new FormGroup({
    email: new FormControl(this.authService?.getFirebaseUser()?.email, [Validators.required, Validators.email]),
    nom: new FormControl(this.authService?.getUserObject()?.nom, [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl(this.authService?.getUserObject()?.prenom, [Validators.required, Validators.minLength(2)]),
    tel : new FormControl('', [Validators.required, Validators.minLength(2)])
  });
  value: any = new FormControl();


  ngOnInit(): void{

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: {id: 0, nom: '', prenom: '', lienFamille: ''}
    });

    dialogRef.afterClosed().subscribe(resident => {
      console.log('The dialog was closed');
      if (resident) {
        this.logger.debug(`validateInfos : nom ${resident?.nom} --- prenom ${resident?.prenom}  `);
        this.residentList.push(resident);
        this.selectedResidents.push(resident);
        this.toastrService.success('Resident Ajouté à la liste');
      }
    });
  }

  clearItems(): void{
    this.residentList = [];
  }

  onchange(value , status: boolean): void
  {
    if (this.residentList.indexOf(value) === -1 && status)
    {
      this.residentList.push(value);
    }
    else if (!status)
    {
      const index = this.residentList.indexOf(value);
      this.residentList.splice(index, 1);
    }
    console.log(this.residentList);
  }

  validateInfos(firebaseUser: any, nom: string, prenom: string, email: string, tel: string): void{
    console.log(`nom ${nom} --- prenom ${prenom}  `);
    if (this.form.valid) {
      if (this.residentList.length < 1) {
        this.toastrService.warning('Vous devez choisir au moins un résident!', 'Choix de résident!');
      }else {
        this.logger.debug(`validateInfos : nom ${nom} --- prenom ${prenom}  `);
        const contact: IContact = {idContact: 0, nom, prenom, numtel: tel, firebasetoken: firebaseUser.firebasetoken, statutcompte : 'En cours', mail: firebaseUser.mail};
        this.accountService.saveContactWithResident(contact, this.residentList).then(e => {
          this.toastrService.success('Information bien enregistrés');
          this.route.navigate(['contact']);
        }).catch(ex => {
          this.logger.debug(ex.error);
          this.toastrService.error('Echec d\'enregistrement des informations pour ce compte ', 'Informations compte');
        });
      }
    }else {
      this.toastrService.warning('Vous saisir votre nom et prenom!');
    }
  }

  delete(event: any, year: any): void
  {
    event.preventDefault(); // <--prevent default
    event.stopPropagation();  // stop propagation
    this.residentList = this.residentList.filter(x => x.id !== year.id); // <--remove the element from data
   /* if (this.value.value ==year)
      this.value.setValue(null) //<--if the value is the remove data, set null*/

  }
}
