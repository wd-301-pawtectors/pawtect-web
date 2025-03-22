import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router: Router) {}

  //HEADING IMAGE
  imagePath: string = 'assets/images/about-us/about-hero.webp';

  //WHAT WE DO IMAGES
  card1: string = 'assets/images/about-us/about-adoption-and-rehoming-card.webp';
  card2: string = 'assets/images/about-us/about-animal-rescue-card.webp';
  card3: string = 'assets/images/about-us/about-community-education-and-awareness-card.webp';
  
  //OUR PARTNERS IMAGES
  grid1: string = 'assets/images/about-us/about-cio-logo.webp';
  grid2: string = 'assets/images/about-us/about-cityvet-logo.webp';
  grid3: string = 'assets/images/about-us/about-serbisyo-logo.webp';
  grid4: string = 'assets/images/about-us/about-jci-logo.webp';

  //JOIN THE CAUSE IMAGE
  cause: string = 'assets/images/about-us/about-join-the-cause-card.webp';

  //BUTTON ROUTER LINKS
  navigateToVolunteer() {
    this.router.navigate(['/pawtector']);
  }
   
  navigateToDonate() {
    this.router.navigate(['/pawtector']);
  }
  
  navigateToAdopt() {
    this.router.navigate(['/our-pack']);
  }
}

