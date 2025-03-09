import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { OurPackComponent } from './pages/our-pack/our-pack.component';
import { PawtectorComponent } from './pages/pawtector/pawtector.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'our-pack', component: OurPackComponent },
    { path: 'pawtector', component: PawtectorComponent }
];
