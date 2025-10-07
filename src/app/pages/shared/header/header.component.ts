import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
    imports:[IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonIcon,IonButtons,IonBackButton]

})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
    @Input() titulo='no hay titulo'
}
