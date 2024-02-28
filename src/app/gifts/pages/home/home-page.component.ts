import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../componets/search-box/search-box.component';
import { CardListComponent } from '../../componets/card-list/card-list.component';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'gift-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private gifsService: GiftService) { }

  get gifs() {
    return this.gifsService.gifsList;
  }

}
