import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'search-box',
  standalone:true,
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private giftService: GiftService) { }

  seachTag() {

    const newTag = this.tagInput.nativeElement.value;

    this.giftService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }


}
