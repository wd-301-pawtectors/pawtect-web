import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  // HERO BANNER IMAGE
  imagePath: string = 'assets/images/home/home-banner.webp';

  // CARD IMAGE
  card1: string = 'assets/images/home/home-who-we-are.webp';
  card2: string = 'assets/images/home/home-be-a-pawtector.webp';

  // CAROUSEL
  currentIndex: number = 0;

  animals = [
    {
      name: 'Buddy',
      age: 7,
      breed: 'Husky',
      image: 'assets/images/home/home-buddy-dog.webp',
    },
    {
      name: 'Luna',
      age: 5,
      breed: 'Labrador',
      image: 'assets/images/home/home-luna-dog.webp',
    },
    {
      name: 'Whiskers',
      age: 2,
      breed: 'Domestic Shorthair',
      image: 'assets/images/home/home-whiskers-cat.webp',
    },
    {
      name: 'Bella',
      age: 1,
      breed: 'Domestic Shorthair',
      image: 'assets/images/home/home-bella-cat.webp',
    },
  ];

  animalsdesktop = [
    {
      name: 'Buddy',
      age: 7,
      breed: 'Husky',
      image: 'assets/images/home/home-buddy-dog.webp',
    },
    {
      name: 'Luna',
      age: 5,
      breed: 'Labrador',
      image: 'assets/images/home/home-luna-dog.webp',
    },
    {
      name: 'Whiskers',
      age: 2,
      breed: 'Domestic Shorthair',
      image: 'assets/images/home/home-whiskers-cat.webp',
    },
    {
      name: 'Bella',
      age: 1,
      breed: 'Munchkin',
      image: 'assets/images/home/home-bella-cat.webp',
    },
    {
      name: 'Ben',
      age: 2,
      breed: 'Pit Bull',
      image: 'assets/images/home/home-ben-dog.webp',
    },
    {
      name: 'Cleo',
      age: 2,
      breed: 'Domestic Shorthair',
      image: 'assets/images/home/home-cleo-cat.webp',
    },
    {
      name: 'Coco',
      age: 2,
      breed: 'Labrador',
      image: 'assets/images/home/home-coco-dog.webp',
    },
    {
      name: 'Rex',
      age: 7,
      breed: 'Shih Tzu',
      image: 'assets/images/home/home-rex-dog.webp',
    },
  ];

  direction: 'next' | 'prev' = 'next';

  nextSlide() {
    this.direction = 'next';
    this.currentIndex = (this.currentIndex + 1) % this.animals.length;
  }

  prevSlide() {
    this.direction = 'prev';
    this.currentIndex =
      (this.currentIndex - 1 + this.animals.length) % this.animals.length;
  }

  // HOW YOU CAN HELP US

  helpOptions = [
    {
      image: 'assets/images/home/home-adopt-me.webp',
      buttonText: 'Adopt',
      link: '/our-pack',
    },
    {
      image: 'assets/images/home/home-donate.webp',
      buttonText: 'Donate',
      link: '/pawtector',
    },
    {
      image: 'assets/images/home/home-volunteer.webp',
      buttonText: 'Volunteer ',
      link: '/pawtector',
    },
    {
      image: 'assets/images/home/home-report.webp',
      buttonText: 'Report',
      link: '/pawtector',
    },
  ];
}
