import {Component} from '@angular/core';
import {ContactNavItems, DirectionNavItems, personnelNavItems} from '../../_nav';
import {AuthService} from '../../sharedServices/services/auth.service';
import {Role} from '../../sharedServices/models/Role';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = DirectionNavItems;

  constructor(private auth: AuthService, private route: ActivatedRoute) {
    this.route
      .data
      .subscribe(v => {
        this.set(v.role);
      });
/*
    const role: Role = this.route.snapshot.params.role;
    console.log(role);
    if (role) { this.set(role); }*/
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  set(role: Role) {
    switch (role) {
      case Role.Contact:
        this.navItems = ContactNavItems;
        break;
      case Role.Personnel:
        this.navItems = personnelNavItems;
        break;
      case Role.Direction:
        this.navItems = DirectionNavItems;
        break;
      // case Role.Direction: this.navItems = DirectionNavItems; break;
    }
  }
}
