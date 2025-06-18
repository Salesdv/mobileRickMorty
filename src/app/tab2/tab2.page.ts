import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Character } from '../services/rick-morty.service';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonChip, IonButton, IonIcon, IonBackButton, IonButtons, CommonModule]
})
export class Tab2Page implements OnInit {
  character: Character | null = null;

  constructor(private router: Router) {
    addIcons({ arrowBack });
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.character = navigation.extras.state['character'];
    }
  }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'danger';
      default:
        return 'medium';
    }
  }

  getGenderColor(gender: string): string {
    switch (gender.toLowerCase()) {
      case 'male':
        return 'primary';
      case 'female':
        return 'secondary';
      default:
        return 'tertiary';
    }
  }
}
