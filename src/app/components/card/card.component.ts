import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonLabel, IonIcon, IonButton, IonCard } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { book, close, heart,star } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  standalone: true,
    imports:[CommonModule, FormsModule, IonLabel, IonIcon, IonButton, IonCard],
  template:`<ion-card>
        <ion-button (click)="openOption()">
          <ion-icon slot="icon-only" name="ellipsis-vertical">
          </ion-icon>
        </ion-button>
        <img [src]="book?.image_url || 'imagen-default'" (click)="toDetail()">
        <h6>{{book?.autor || 'Autor desconocido'}}</h6>
        <ion-label>{{book?.titulo || 'Título por defecto'}}</ion-label>
        
</ion-card>`,
  styles:`
  
ion-card{
    --background: transparent !important;
    box-shadow: none;
}

ion-card > img{
    border-radius: 18px 18px 0px 0px !important;
}

ion-card > h6{
    margin-top:0px ;
    margin-left:5%;
    font-weight: bold;
    font-style: italic;
    border-radius: 18px !important;
    padding-bottom: 5px;
}

ion-card > ion-label{
    margin-top: 0px ;
    margin-left:5%;
}

ion-card > ion-button{
   position: absolute;
   right: 10px;
   --border-radius: 50%;
}`
  })
export class  CardComponent  implements OnInit {
  private actionSheetCtrl = inject(ActionSheetController);
  private _router= inject(Router);
  @Input() book: any;
  toDetail()
  {
    this._router.navigate(['/book-detail']);
  }
  async openOption()
  {
    const asheet = await this.actionSheetCtrl.create({
      backdropDismiss: false,
      header: 'Titulo del libro',
      buttons: [
        {
          text: 'Favorito',
          icon: 'star',
          handler: () => {
            console.log('Se añadio a favoritos');
          }
        },
        {
          text: 'Solicitar libro',
          icon: 'book',
          handler: () => {
            console.log('Se solicito el libro');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          handler: () => {
            console.log('Se cancelo el momo');
          }
        }
      ]
    });
    await asheet.present();
  }

  constructor() { 
    addIcons({close,book, heart, star})
  }

  ngOnInit() {}

}
