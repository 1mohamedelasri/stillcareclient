import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Role} from '../../models/Role';
import {AuthService} from "../../services/auth.service";

@Injectable({ providedIn: 'root' })
export class PersonnelGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.authService.currentRoleObs.subscribe(role => {
      if (role) {
        if (role === Role.Contact) {
          this.router.navigate(['contact']);
          return false;
        }
        if (role === Role.Direction) {
          this.router.navigate(['direction']);
          return false;
        }
      }
    });

    return true;
  }
}
