import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import {Subject} from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  multi;
  movies;
  tvShows;
  people;
  routTo: string;
  constructor(
    private movieService: MovieService) {
    this.movieService.search(this.searchTerm$)
      .subscribe(data => {
        this.multi = data; 
      },
        err => console.log(err),
        () => console.log(" search ok")
      );
  }
  getMovies() {
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`movies ok`)
    );

  }

  getTvShows() {
    this.movieService.getTvShows().subscribe(
      data => {
        this.tvShows = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`tv shows ok`)
    );
  }

  getPeople() {
    this.movieService.getPeople().subscribe(
      data => {
        this.people = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`people ok`)
    );
  }

 
  ngOnInit() {
   this.getMovies();
   this.getTvShows();
   this.getPeople();

  }

}