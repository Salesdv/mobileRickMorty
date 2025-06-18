import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, school, mail, logoGithub, logoLinkedin } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonIcon, IonButton],
})
export class Tab3Page {
  authorInfo = {
    name: 'Pedro Henrique Pereira Sales',
    course: 'Desenvolvimento para Dispositivos Móveis',
    institution: 'Uninassau',
    email: 'pedrohsales.dv@gmail.com',
    github: 'pedrohsales.dv@gmail.com',
    linkedin: 'pedrosalespereira837@gmail.com'
  };

  constructor() {
    addIcons({ person, school, mail, logoGithub, logoLinkedin });
  }
}
