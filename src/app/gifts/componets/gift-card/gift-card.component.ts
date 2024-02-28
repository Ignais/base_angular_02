import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../interfaces/gift.interface';
import { LasyImageComponent } from '../../../shared/components/lasyImage/lasyImage.component';

@Component({
  selector: 'gift-card',
  standalone: true,
  imports: [CommonModule, LasyImageComponent],
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  @Input()
  public gif!: Gift;

  constructor() { }
  ngOnInit(): void {
    if( !this.gif) throw new Error('Gif property is recuared.');
  }

}
