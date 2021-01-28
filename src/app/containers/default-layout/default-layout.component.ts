import {Component} from '@angular/core';
import { personnelNavItems } from '../../_nav';
import { DirectionNavItems } from '../../_nav';
import { ContactNavItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = DirectionNavItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  set(nb: number){
      if (1) { this.navItems = personnelNavItems; }
      else
      if (2) { this.navItems = DirectionNavItems; }
      else
      if (3) { this.navItems = ContactNavItems; }
  }
}
