import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../sharedServices/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'personnel-login.component.html'
})
export class PersonnelLoginComponent {
  public formg = new FormGroup({
    username: new FormControl(' ', [Validators.required, Validators.nullValidator]),
    password: new FormControl(' ', [Validators.required, Validators.nullValidator, Validators.minLength(3)]),
  });
  constructor(private authSevice: AuthService) {
  }
}
