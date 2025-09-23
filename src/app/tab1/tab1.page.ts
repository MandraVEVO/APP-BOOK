import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonText, IonRow, IonCol, IonCard, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonIcon, IonButton, IonCard, IonCol, IonRow, IonText, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCard, IonCol, IonRow, IonText, IonGrid,IonLabel],  
})
export class Tab1Page {
  constructor( )
   {
    addIcons({  ellipsisVertical });
   }
}
