import { Component } from '@angular/core';
import { GiftService } from '../../../gifts/services/gift.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private giftService: GiftService) { }

  public showTag(): string[] {
    return this.giftService.tagHistory;
  }

  get tags(): string[] {
    return this.giftService.tagHistory;
  }

  public searchTag(tag: string): void {
    this.giftService.searchTag(tag);
  }


}
