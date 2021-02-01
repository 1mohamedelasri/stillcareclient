import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Role} from "../../models/Role";

@Injectable({ providedIn: 'root' })
export class ContactGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['main-login']);
      return false;
    }

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
