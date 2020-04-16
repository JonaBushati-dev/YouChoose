import { Component, OnInit } from '@angular/core';
import { FavoriteStorageService } from '../favorite-storage.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  movies=[];
  constructor(private router: Router,private movieService: MovieService, private favoriteItem: FavoriteStorageService) { }
  getStoredItems() {
  
   this.favoriteItem.getItems().forEach(id => {
      this.movieService.getMovie(id).subscribe(
        data => {
          this.movies.push(data);
        },
        err => console.log(err),
        () => console.log(this.movies)
      );
    });
  }
clearFavorites() {
  this.favoriteItem.clearItems();
  this.movies=[];
}

  ngOnInit(): void {
    this.getStoredItems();
  }

}
