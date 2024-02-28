import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lasy-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lasyImage.component.html',
  styleUrls: ['./lasyImage.component.css']
})
export class LasyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL is requared');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 3000)
  }

}
