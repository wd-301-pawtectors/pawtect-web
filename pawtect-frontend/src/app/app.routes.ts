import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { OurPackComponent } from './pages/our-pack/our-pack.component';
import { PawtectorComponent } from './pages/pawtector/pawtector.component';

/* The code snippet is defining an array of route configurations in an Angular application. Each route
configuration consists of a path and a corresponding component that should be displayed when the
user navigates to that path. */
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'our-pack', component: OurPackComponent },
    { path: 'pawtector', component: PawtectorComponent }
];
