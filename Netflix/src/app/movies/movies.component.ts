import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Subject} from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  popular;
  movies;
  upComing;
  nowPlaying;
  topRated;
  searchText: string;
  constructor(
    private movieService: MovieService) {
    this.movieService.search(this.searchTerm$)
    .subscribe(data => {
      this.movies = data;
    },
      err => console.log(err),
      () => console.log(this.movies)


    );
  }
   getMovies() {
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success test`)
    );

  }

  getPopular() {
    this.movieService.getPopular().subscribe(
      data => {
        this.popular = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  getUpcoming() {
    this.movieService.getUpcoming().subscribe(
      data => {
        this.upComing = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  getNowPlaying() {
    this.movieService.getNowPlaying().subscribe(
      data => {
        this.nowPlaying = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  getTopRated() {
    this.movieService.getTopRated().subscribe(
      data => {
        this.topRated = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }


  ngOnInit(): void {
    this.getMovies();
    this.getPopular();
    this.getUpcoming();
    this.getNowPlaying();
    this.getTopRated();
  
  }

}