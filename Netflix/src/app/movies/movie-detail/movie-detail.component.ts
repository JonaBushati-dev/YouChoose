import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from 'src/app/movie.service';
import { FavoriteStorageService } from 'src/app/favorite-storage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  showContent = true;
  public movie;
  public videos;
  public genre;
  public addFavorite: boolean = false;
  movie_id: number;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favoriteService: FavoriteStorageService
 ) { }


  getMovie(): void {
    this.movie_id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(this.movie_id ).subscribe(
      data => {
        this.movie = data;
        console.log(data)

      },
      err => console.log(err),
      () => {
        this.movieService.getMovieGenres(this.movie.genres.id).subscribe
          (
            data => {
              this.genre = data;
              console.log(this.genre);
            },
            err => console.log(err),
            () => {
              console.log(``);
            }
          )
      }
    );

  }

  getVideo(): void {
    this.movie_id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getVideo(this.movie_id ).subscribe(
      data => {
        this.videos = data;
        console.log("test")
      }
    );
  }
  addItem(event, movieId) {
    this.favoriteService.addToFavorites(movieId);
    this.addFavorite = true;
  }
  showTrailer() {
    this.showContent = !this.showContent;
  }

   ngOnInit() {
     
    this.getMovie();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.getVideo();
  }

}
