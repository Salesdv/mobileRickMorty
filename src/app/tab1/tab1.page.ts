import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent, IonSpinner } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RickMortyService, Character, ApiResponse } from '../services/rick-morty.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel, IonSearchbar, IonInfiniteScroll, IonInfiniteScrollContent, IonSpinner, CommonModule],
})
export class Tab1Page implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 1;
  isLoading = false;
  searchTerm = '';

  constructor(
    private rickMortyService: RickMortyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.isLoading = true;
    this.rickMortyService.getCharacters(this.currentPage).subscribe({
      next: (response: ApiResponse) => {
        this.characters = [...this.characters, ...response.results];
        this.totalPages = response.info.pages;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar personagens:', error);
        this.isLoading = false;
      }
    });
  }

  onIonInfinite(event: any) {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    if (this.searchTerm.trim() === '') {
      this.resetSearch();
    } else {
      this.searchCharacters();
    }
  }

  searchCharacters() {
    this.isLoading = true;
    this.rickMortyService.searchCharacters(this.searchTerm).subscribe({
      next: (response: ApiResponse) => {
        this.characters = response.results;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro na busca:', error);
        this.characters = [];
        this.isLoading = false;
      }
    });
  }

  resetSearch() {
    this.characters = [];
    this.currentPage = 1;
    this.loadCharacters();
  }

  goToCharacterDetail(character: Character) {
    this.router.navigate(['/tabs/tab2'], { state: { character } });
  }
}
