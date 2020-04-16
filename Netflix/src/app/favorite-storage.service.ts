import { Inject,Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
 
export class FavoriteStorageService {
  items = [];
  STORAGE_KEY = 'item_key';
  
  constructor(@Inject(SESSION_STORAGE) private storeFavorites: StorageService) { }

  addToFavorites(movieId: number): void {
    if(!this.items.includes(movieId)) {
      this.items = this.storeFavorites.get(this.STORAGE_KEY) || []
    this.items.push(movieId);
    this.storeFavorites.set(this.STORAGE_KEY, this.items);
  }
  }

  getItems() {
    return this.storeFavorites.get(this.STORAGE_KEY) || [];
  }

clearItems() {
  this.items=this.storeFavorites.get(this.STORAGE_KEY) || [];
  this.items=null;
  this.storeFavorites.set(this.STORAGE_KEY, this.items);
}

}
