import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../sharedServices/services/auth.service';
// MDB Angular Free
@Component({
  selector: 'app-contact-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./contact-login.component.scss']
})
export class MainLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  LoginWithGoogle(): void{
    console.log('USEER');
    this.authService.signInWithGoogle();
  }
}
