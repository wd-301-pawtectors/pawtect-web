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
  imageURL: string = 'assets/images/our-pack';
  animals: any[] = [
      {
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        gender: "Male",
        age: "5",
        size: "Medium",
        weight: "4KG",
        description: "Buddy is a friendly and playful dog who loves to run around and make new friends. With his fluffy coat and bright smile, he brings joy to everyone he meets.",
        image: "assets/images/our-pack/our-pack-buddy-dog.webp"
      },
      {
        name: "Luna",
        type: "Dog",
        breed: "Siberian Husky",
        gender: "Female",
        age: "2",
        size: "Large",
        weight: "6KG",
        description: "An energetic and independent Husky who enjoys long runs and exploring new places. She’s smart and playful but also enjoys quiet moments, often curling up in a cozy spot after a busy day.",
        image: "assets/images/our-pack/our-pack-luna-dog.webp"
      },
      {
        name: "Charlie",
        type: "Dog",
        breed: "Beagle",
        gender: "Male",
        age: "4",
        size: "Small",
        weight: "4KG",
        description: "A curious and adventurous Beagle who spends most of his day sniffing around and following interesting scents. He loves meeting new people and gets excited over treats, belly rubs, and playful tug-of-war sessions.",
        image: "assets/images/our-pack/our-pack-charlie-dog.webp"
      },
      {
        name: "Daisy",
        type: "Dog",
        breed: "Shih Tzu",
        gender: "Female",
        age: "1",
        size: "Small",
        weight: "3KG",
        description: "A gentle and affectionate lap dog who loves being held and brushed. She enjoys short walks but prefers spending most of her time curled up in a warm blanket or following her favorite person around the house.",
        image: "assets/images/our-pack/our-pack-daisy-dog.webp"
      },
      {
        name: "Max",
        type: "Dog",
        breed: "Labrador Retriever",
        gender: "Male",
        age: "5",
        size: "Large",
        weight: "6KG",
        description: "A loyal and intelligent Labrador who thrives on routine. He enjoys fetch, swimming, and greeting people with a wagging tail, always eager to make new friends.",
        image: "assets/images/our-pack/our-pack-max-dog.webp"
      },
      {
        name: "Coco",
        type: "Dog",
        breed: "Poodle",
        gender: "Female",
        age: "2",
        size: "Small",
        weight: "3KG",
        description: "A small but confident Poodle who enjoys being pampered and learning new tricks. She spends her day hopping onto furniture for the best view and loves attention, especially when it comes with treats.",
        image: "assets/images/our-pack/our-pack-coco-dog.webp"
      },
      {
        name: "Rocky",
        type: "Dog",
        breed: "German Shepherd",
        gender: "Male",
        age: "3",
        size: "Large",
        weight: "6KG",
        description: "A protective yet gentle German Shepherd who enjoys structured activities like training exercises and interactive games. He spends his day watching over his surroundings and staying close to the people he trusts.",
        image: "assets/images/our-pack/our-pack-rocky-dog.webp"
      },
      {
        name: "Milo",
        type: "Dog",
        breed: "Dachshund",
        gender: "Male",
        age: "1",
        size: "Small",
        weight: "3KG",
        description: "A playful and curious Dachshund who loves to burrow under blankets and squeeze into tight spaces. He spends most of his day investigating every corner of his home and eagerly waiting for playtime.",
        image: "assets/images/our-pack/our-pack-milo-dog.webp"
      },
      {
        name: "Zoe",
        type: "Dog",
        breed: "Mixed Breed",
        gender: "Female",
        age: "4",
        size: "Medium",
        weight: "5KG",
        description: "A lively and affectionate mixed breed who enjoys running around and playing with toys. She loves exploring new environments and always greets people with an excited wag of her tail.",
        image: "assets/images/our-pack/our-pack-zoe-dog.webp"
      },
      {
        name: "Rex",
        type: "Dog",
        breed: "Boxer",
        gender: "Male",
        age: "7",
        size: "Large",
        weight: "6KG",
        description: "A calm and gentle Boxer who enjoys sunbathing and relaxing in a quiet spot. He appreciates slow, peaceful walks and spending time near his favorite people, always happy to be included in daily activities.",
        image: "assets/images/our-pack/our-pack-rex-dog.webp"
      },
      {
        name: "Ben",
        type: "Dog",
        breed: "Border Collie",
        gender: "Male",
        age: "2",
        size: "Medium",
        weight: "5KG",
        description: "An energetic and highly intelligent dog who loves to stay active. He enjoys agility exercises and needs plenty of mental and physical stimulation. Ben is affectionate, loyal, and thrives in a home with an active lifestyle.",
        image: "assets/images/our-pack/our-pack-ben-dog.webp"
      },
      {
        name: "Casper",
        type: "Dog",
        breed: "Australian Shepherd",
        gender: "Male",
        age: "4",
        size: "Medium",
        weight: "5KG",
        description: "A friendly and loving dog who enjoys playing fetch and spending time with his family. He is highly social and thrives when given plenty of attention and affection.",
        image: "assets/images/our-pack/our-pack-casper-dog.webp"
      },
      {
        name: "Whiskers",
        type: "Cat",
        breed: "Domestic Shorthair",
        gender: "Male",
        age: "2",
        size: "Medium",
        weight: "4KG",
        description: "A laid-back and observant cat who enjoys watching the world from a high perch. He spends his day lounging in sunbeams and occasionally batting at moving objects with mild interest.",
        image: "assets/images/our-pack/our-pack-whiskers-cat.webp"
      },
      {
        name: "Lily",
        type: "Cat",
        breed: "Siamese",
        gender: "Female",
        age: "1",
        size: "Small",
        weight: "3KG",
        description: "A graceful and curious Siamese who enjoys perching on bookshelves and watching birds through the window. She’s vocal and affectionate, often following her favorite person around the house.",
        image: "assets/images/our-pack/our-pack-lily-cat.webp"
      },
      {
        name: "Simba",
        type: "Cat",
        breed: "Maine Coon",
        gender: "Male",
        age: "3",
        size: "Large",
        weight: "5KG",
        description: "A relaxed yet social Maine Coon who loves being brushed and stretching out across any available surface. He enjoys slow mornings and will happily sit beside you, observing everything with quiet intelligence.",
        image: "assets/images/our-pack/our-pack-simba-cat.webp"
      },
      {
        name: "Bella",
        type: "Cat",
        breed: "Persian",
        gender: "Female",
        age: "1",
        size: "Small",
        weight: "3KG",
        description: "A playful and affectionate Persian kitten who loves chasing after toys and curling up in soft blankets. She enjoys being the center of attention and will happily nuzzle into anyone willing to pet her.",
        image: "assets/images/our-pack/our-pack-bella-cat.webp"
      },
      {
        name: "Oreo",
        type: "Cat",
        breed: "Tuxedo",
        gender: "Male",
        age: "4",
        size: "Medium",
        weight: "4KG",
        description: "A confident and curious tuxedo cat who loves to explore every corner of his home. He enjoys chasing after laser pointers and climbing onto shelves just to see what’s up there.",
        image: "assets/images/our-pack/our-pack-oreo-cat.webp"
      },
      {
        name: "Misty",
        type: "Cat",
        breed: "Russian Blue",
        gender: "Female",
        age: "5",
        size: "Medium",
        weight: "5KG",
        description: "A calm and reserved Russian Blue who enjoys quiet spaces and gentle companionship. She spends most of her day napping in cozy corners and prefers affection on her own terms.",
        image: "assets/images/our-pack/our-pack-misty-cat.webp"
      },
      {
        name: "Tiger",
        type: "Cat",
        breed: "Bengal",
        gender: "Male",
        age: "2",
        size: "Large",
        weight: "6KG",
        description: "An energetic and playful Bengal who loves to climb, run, and chase anything that moves. He’s always looking for something to do and enjoys interactive toys that keep him engaged.",
        image: "assets/images/our-pack/our-pack-tiger-cat.webp"
      },
      {
        name: "Pumpkin",
        type: "Cat",
        breed: "Calico",
        gender: "Female",
        age: "3",
        size: "Medium",
        weight: "4KG",
        description: "A sweet and affectionate Calico who loves to knead soft blankets and curl up next to her favorite humans. She enjoys gentle head rubs and will often purr loudly in appreciation.",
        image: "assets/images/our-pack/our-pack-pumpkin-cat.webp"
      },
      {
        name: "Shadow",
        type: "Cat",
        breed: "Black Cat",
        gender: "Male",
        age: "1",
        size: "Medium",
        weight: "4KG",
        description: "A sleek and mysterious black cat who enjoys sneaking into small spaces and watching from the shadows. He’s playful at night and loves darting after anything that moves.",
        image: "assets/images/our-pack/our-pack-shadow-cat.webp"
      },
      {
        name: "Cleo",
        type: "Cat",
        breed: "Ragdoll",
        gender: "Female",
        age: "2",
        size: "Large",
        weight: "6KG",
        description: "A soft and elegant Ragdoll who enjoys being carried and held. She spends her day lounging in comfortable spots and will happily flop onto your lap for attention.",
        image: "assets/images/our-pack/our-pack-cleo-cat.webp"
      },
      {
        name: "Choco",
        type: "Cat",
        breed: "Domestic Shorthair",
        gender: "Male",
        age: "2",
        size: "Medium",
        weight: "5KG",
        description: "Choco is a sweet and laid-back cat who loves lounging in cozy spots and getting belly rubs. He’s calm, affectionate, and enjoys being around people.",
        image: "assets/images/our-pack/our-pack-choco-cat.webp"
      },
      {
        name: "Olie",
        type: "Cat",
        breed: "Scottish Fold",
        gender: "Female",
        age: "1",
        size: "Small",
        weight: "3KG",
        description: "Olie is a playful and curious Scottish Fold with adorable folded ears. She loves exploring her surroundings and is very social, always seeking attention from her humans.",
        image: "assets/images/our-pack/our-pack-olie-cat.webp"
      }

    
  ];
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
  totalPages: number = 2;


  privUrl = 'http://localhost:3000/api/animals';
  private imageBasePath = 'public/assets/images/';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.animals.length / this.pageSize);
    this.updateFilteredAnimals();
    this.filteredAnimals = this.animals.slice(0, this.pageSize); 
  }

  
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

  //CARD MODAL
  openModal(animal: any): void {
    this.selectedAnimal = animal;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedAnimal = null;
  }
  //SEARCH MODAL
  openSearchModal(): void {
    this.isSearchModalOpen = true;
  }

  closeSearchModal(): void {
    this.isSearchModalOpen = false;
  }

  applySearch(): void {
    let filtered = this.animals;

    if (this.searchQuery) {
        filtered = filtered.filter((animal) =>
            animal.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            animal.breed.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }

    this.currentPage = 1;
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.filteredAnimals = filtered.slice(0, this.pageSize);
}

  //FILTER AND SORT
  applyFilters(): void {
    this.closeSearchModal();

    let filtered = this.animals;

    if (this.searchQuery) {
      filtered = filtered.filter((animal) =>
          animal.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          animal.breed.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }

    if (this.selectedType) {
        filtered = filtered.filter((animal) => animal.type.toLowerCase() === this.selectedType.toLowerCase());
    }

    if (this.selectedAgeGroup) {
        filtered = filtered.filter((animal) => {
            const age = animal.age;
            if (this.selectedAgeGroup === '0-3') return age >= 0 && age <= 3;
            if (this.selectedAgeGroup === '4-6') return age >= 4 && age <= 6;
            if (this.selectedAgeGroup === '7+') return age >= 7;
            return true;
        });
    }

    if (this.selectedSize) {
        filtered = filtered.filter((animal) => animal.size.toLowerCase() === this.selectedSize.toLowerCase());
    }

    if (this.selectedGender) {
        filtered = filtered.filter((animal) => animal.gender.toLowerCase() === this.selectedGender.toLowerCase());
    }

    if (this.sortOption === 'age') {
        filtered = filtered.sort((a, b) => a.age - b.age);
    } else if (this.sortOption === 'name') {
        filtered = filtered.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    this.currentPage = 1;
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.filteredAnimals = filtered.slice(0, this.pageSize);
}
  //SCROLL TO ANIMALS
  scrollToAnimals() {
    const animalsSection = document.getElementById('animals-section');
    if (animalsSection) {
      animalsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  //IMAGE MODAL
  handleImageClick(imageUrl: string): void {
    console.log("Image URL:", imageUrl);
    this.selectedImage = imageUrl;
  }
  
  selectedImage = this.animals.length > 0 ? this.animals[0].image : '';
}


