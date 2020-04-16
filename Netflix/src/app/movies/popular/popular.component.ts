import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
popular;
searchText: string;
  constructor(private movieService: MovieService) { }
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
  ngOnInit(): void {
    this.getPopular();
  }

}
