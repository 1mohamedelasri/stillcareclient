import { Component } from '@angular/core';
import {AuthService} from '../../sharedServices/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'personnel-login.component.html'
})
export class PersonnelLoginComponent {

  constructor(private authSevice: AuthService) {
  }
}
