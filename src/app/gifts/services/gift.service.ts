import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchResponse } from '../interfaces/gift.interface';

@Injectable({providedIn: 'root'})
export class GiftService {

  public gifsList: Gift[] = [];

  private _tagHistory: string[] = [];
  private apikey: string = 'siHkM6MVqX6nOwQOlXjom3iFlNxeqCHB';
  private url: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {

  }

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  private orginizeHistory(tag: string) {
    tag = tag.trim().toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.slice(0, 10);
    this.saveLocalStorage();
  }
  public searchTag( tag: string ): void {
    if (tag.length === 0) return;
    this.orginizeHistory(tag);

    const params = new HttpParams().set('api_key', this.apikey).set('limit', '10').set('q', tag);

    this.http.get<SearchResponse>(`${this.url}/search`, {params: params})
    .subscribe(
        (response) => {
          this.gifsList = response.data;
        });
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    localStorage.getItem('history')? this._tagHistory = JSON.parse(localStorage.getItem('history')!) : this._tagHistory = [];
  }

}
