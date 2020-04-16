import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
  nowPlaying;
  searchText: string;
  constructor(private movieService: MovieService) { }
  getNowPlaying() {
    this.movieService.getPopular().subscribe(
      data => {
        this.nowPlaying = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }
  ngOnInit(): void {
    this.getNowPlaying();
  }

}
