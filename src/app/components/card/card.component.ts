import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
        <img (click)="toDetail()" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkf7i23obiQDg-PcF0RWPp3eKmKhPTZwE0M7qsIQiC3jjcOD-nGrx1Hlgl30CiOYfqx4tDYujdb86XhEq3UxhKVSsDrjaUtvhRe5mvtAP2u1rLgo_sMDsH6kWPMY5XBJRo-0PjcxyMWps/s640/El+libro+vaquero+Moderatto.png" alt="">
        <h6>Pablo neruda</h6>
        <ion-label>El libro vaquero</ion-label>
        
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
