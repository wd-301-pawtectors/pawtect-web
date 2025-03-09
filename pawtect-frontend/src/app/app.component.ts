import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* The lines `import { NavbarComponent } from './components/navbar/navbar.component';` and `import {
FooterComponent } from './components/footer/footer.component';` are importing the `NavbarComponent`
and `FooterComponent` classes from their respective files in the project structure. This allows the
`AppComponent` to use these components within its template or logic. */
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pawtect-webapp';
}
