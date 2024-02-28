import { Component, Input } from '@angular/core';
import { Gift } from '../../interfaces/gift.interface';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from "../gift-card/gift-card.component";

@Component({
    selector: 'gift-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [CommonModule, GiftCardComponent]
})
export class CardListComponent {

  @Input()
  public gifts: Gift[] = [];

}
