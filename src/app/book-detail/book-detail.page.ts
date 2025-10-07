import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../pages/shared/header/header.component';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class BookDetailPage implements OnInit {

  book = {
    titulo: 'El libro vaquero',
    imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkf7i23obiQDg-PcF0RWPp3eKmKhPTZwE0M7qsIQiC3jjcOD-nGrx1Hlgl30CiOYfqx4tDYujdb86XhEq3UxhKVSsDrjaUtvhRe5mvtAP2u1rLgo_sMDsH6kWPMY5XBJRo-0PjcxyMWps/s640/El+libro+vaquero+Moderatto.png',
    descripcion: 'Una fascinante historia de aventuras en el viejo oeste, llena de acción, romance y personajes inolvidables que te transportarán a una época de cowboys y justicia.',
    genero: 'Aventura / Western',
    numeroPaginas: '248 páginas',
    editorial: 'Editorial Novaro',
    fechaPublicacion: '15 de marzo de 1965',
    disponibilidad: 'Disponible'
  };

  constructor() { }

  ngOnInit() {
  }

}
