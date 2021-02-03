import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Role} from '../../models/Role';
import {AuthService} from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class ContactGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const role = this.authService.currentUserRole();
    if (role) {
      if (role === Role.Direction) {
        this.router.navigate(['direction']);
        return false;
      }
      if (role === Role.Personnel) {
        this.router.navigate(['personnel']);
        return false;
      }
    }
    return true;
  }
}
