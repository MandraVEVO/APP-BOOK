import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonText, IonRow, IonCol, IonCard, IonLabel, IonButton, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { ellipsisVertical } from 'ionicons/icons';
import { HeaderComponent } from '../pages/shared/header/header.component';
import { CardComponent } from '../components/card/card.component';
import { Supabase } from '../supabase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonSearchbar, IonIcon, IonButton, IonCard, IonCol, IonRow, IonText, IonGrid, IonContent,  IonCol, IonRow, IonGrid, HeaderComponent, CardComponent, IonSearchbar],
})



export class Tab1Page {

  usuarios: any[] = [];
  allBooks: any[] = []; 
  private supabaseS = inject(Supabase);


  constructor( )
   {
    addIcons({  ellipsisVertical });
    this.getBooks();
   }

   async buscarLibro(event: any) {
    const searchTerm = event.detail.value;
    console.log('Buscando:', searchTerm);
    
    if (!searchTerm || searchTerm.trim() === '') {
      this.usuarios = [...this.allBooks];
      return;
    }

    try {
      this.usuarios = await this.supabaseS.searchBooks(searchTerm);
      console.log('Resultados:', this.usuarios);
    } catch (error) {
      console.error('Error al buscar libros:', error);
      this.usuarios = [...this.allBooks];
    }
   }

  async getBooks(){
    this.usuarios = await this.supabaseS.getAll('books');
    this.allBooks = [...this.usuarios]; // Guardar copia de todos los libros
    console.log('Libros cargados:', this.usuarios);
  }
}
