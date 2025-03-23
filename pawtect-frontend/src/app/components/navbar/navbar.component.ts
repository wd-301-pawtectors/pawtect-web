import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
      if (!this.menuOpen) {
    window.scrollTo(0, 0);
  }
  }
}
