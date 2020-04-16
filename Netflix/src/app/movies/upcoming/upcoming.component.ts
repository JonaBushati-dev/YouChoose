import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  upcoming;
  searchText: string;
  constructor(private movieService: MovieService) { }
  getUpcoming() {
    this.movieService.getUpcoming().subscribe(
      data => {
        this.upcoming = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }
  ngOnInit(): void {
    this.getUpcoming();
  }
}
