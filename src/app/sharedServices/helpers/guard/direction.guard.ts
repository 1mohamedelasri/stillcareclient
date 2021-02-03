import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Role} from '../../models/Role';

@Injectable({ providedIn: 'root' })
export class DirectionGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.currentRoleObs.subscribe( role => {
        if (role) {
          if (role === Role.Contact) {
            this.router.navigate(['contact']);
            return false;
          }
          if (role === Role.Personnel) {
            this.router.navigate(['personnel']);
            return false;
          }
        }
      }
    );
    return true;
  }
}
