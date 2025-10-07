import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonText, IonRow, IonCol, IonCard, IonLabel, IonButton, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';
import { HeaderComponent } from '../pages/shared/header/header.component';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonSearchbar, IonIcon, IonButton, IonCard, IonCol, IonRow, IonText, IonGrid, IonContent,  IonCol, IonRow, IonGrid, HeaderComponent, CardComponent, IonSearchbar],
})
export class Tab1Page {
  constructor( )
   {
    addIcons({  ellipsisVertical });
   }

   buscarLibro(event:any){
    console.log(event.detail.value);
   }
}
