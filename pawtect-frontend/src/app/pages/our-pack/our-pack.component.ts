import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-pack',
  templateUrl: './our-pack.component.html',
  styleUrls: ['./our-pack.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OurPackComponent implements OnInit {
  animals: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAnimals();
  }

  fetchAnimals(): void {
    this.http.get<any[]>('http://localhost:5000/api/animals')
      .subscribe({
        next: data => this.animals = data,
        error: error => console.error('Error Fetching Animals: ', error)
      });
  }
}