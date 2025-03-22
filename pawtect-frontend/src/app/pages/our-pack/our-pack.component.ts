import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-pack',
  templateUrl: './our-pack.component.html',
  styleUrls: ['./our-pack.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class OurPackComponent implements OnInit {
  animals: any[] = [];
  filteredAnimals: any[] = [];
  isModalOpen = false;
  isSearchModalOpen = false;
  selectedAnimal: any = null;
  searchQuery: string = '';
  selectedBreed: string = '';
  sortOption: string = '';

  selectedType: string = '';
  selectedAgeGroup: string = '';
  selectedSize: string = '';
  selectedGender: string = '';

  currentPage: number = 1;
  pageSize: number = 12;
  totalPages: number = 1;

  private apiUrl = 'https://pawtect-web-backend.onrender.com/api/animals';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAnimals();
  }

  // FETCH ANIMALS
  fetchAnimals(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.animals = data;
        this.totalPages = Math.ceil(this.animals.length / this.pageSize);
        this.updateFilteredAnimals();
      },
      (error) => {
        console.error('Error fetching animals:', error);
      }
    );
  }

  // PAGINATION
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredAnimals();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredAnimals();
    }
  }

  updateFilteredAnimals() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredAnimals = this.animals.slice(startIndex, endIndex);
  }

  // CARD MODAL
  openModal(animal: any): void {
    this.selectedAnimal = animal;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedAnimal = null;
  }

  // SEARCH MODAL
  openSearchModal(): void {
    this.isSearchModalOpen = true;
  }

  closeSearchModal(): void {
    this.isSearchModalOpen = false;
  }

  // APPLY SEARCH
  applySearch(): void {
    this.http.get<any[]>(`${this.apiUrl}/search-filter?query=${this.searchQuery}`).subscribe(
      (data) => {
        this.animals = data;
        this.currentPage = 1;
        this.totalPages = Math.ceil(this.animals.length / this.pageSize);
        this.updateFilteredAnimals();
      },
      (error) => {
        console.error('Error searching animals:', error);
      }
    );
  }

  // APPLY FILTERS
  applyFilters(): void {
    this.closeSearchModal();

    let filterParams = [];
    if (this.selectedType) filterParams.push(`type=${this.selectedType}`);
    if (this.selectedSize) filterParams.push(`size=${this.selectedSize}`);
    if (this.selectedGender) filterParams.push(`gender=${this.selectedGender}`);

    const queryString = filterParams.length ? `?${filterParams.join('&')}` : '';

    this.http.get<any[]>(`${this.apiUrl}/search-filter${queryString}`).subscribe(
      (data) => {
        let filtered = data;
        if (this.selectedAgeGroup) {
          filtered = filtered.filter((animal) => {
            const age = animal.age;
            if (this.selectedAgeGroup === '0-3') return age >= 0 && age <= 3;
            if (this.selectedAgeGroup === '4-6') return age >= 4 && age <= 6;
            if (this.selectedAgeGroup === '7+') return age >= 7;
            return true;
          });
        }
        this.animals = filtered;
        this.currentPage = 1;
        this.totalPages = Math.ceil(this.animals.length / this.pageSize);
        this.updateFilteredAnimals();
      },
      (error) => {
        console.error('Error filtering animals:', error);
      }
    );
  }

  // SCROLL TO ANIMALS
  scrollToAnimals() {
    const animalsSection = document.getElementById('animals-section');
    if (animalsSection) {
      animalsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // HANDLE IMAGE CLICK
  handleImageClick(imageUrl: string): void {
    console.log('Image URL:', imageUrl);
    this.selectedImage = imageUrl;
  }

  // CLEAR SEARCH AND FILTERS
  clearSearchAndFilters(): void {
    this.searchQuery = '';
    this.selectedType = '';
    this.selectedAgeGroup = '';
    this.selectedSize = '';
    this.selectedGender = '';
    this.fetchAnimals();
  }

  selectedImage = this.animals.length > 0 ? this.animals[0].image : '';
}