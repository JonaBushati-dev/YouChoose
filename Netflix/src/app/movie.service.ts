import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_KEY = 'aebc2f33abd4342843ced33024e4664b';
  BASE_URL = 'https://api.themoviedb.org'
  API_VERSION = '3'

  constructor(private http: HttpClient) { }

  getMovies() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/discover/movie?page=1&language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }

  getMovie(id: number) {
    console.log(`getMovie ${id} called`)
    const api = `${this.BASE_URL}/${this.API_VERSION}/movie/${id}?language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }

  getVideo(id: number) {
    console.log(`testttttttttttttt+ getVideo ${id} called`)
    const api = `${this.BASE_URL}/${this.API_VERSION}/movie/${id}/videos?api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(api);
  }
  getMovieGenres(genre_id: number) {
    const api = `${this.BASE_URL}/${this.API_VERSION}/discover/movie?with_genres=${genre_id}&api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(api);
  }

  search(terms: Observable<string>) {
    return terms.pipe(debounceTime(200))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    if (term != null) {
      const api = `${this.BASE_URL}/${this.API_VERSION}/search/multi?api_key=${this.API_KEY}&query=${term}`;
      return this.http.get(api);
    }
  }
  getTvShows() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/tv/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }
  getPopular() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }

  getUpcoming() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }

  getNowPlaying() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }
  getTopRated() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }

  getPeople() {
    const api = `${this.BASE_URL}/${this.API_VERSION}/person/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }

}