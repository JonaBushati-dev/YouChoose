import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  topRated;
  searchText: string;
  constructor(private movieService: MovieService) { }
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
    this.getTopRated();
  }
}
