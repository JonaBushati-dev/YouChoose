import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PopularComponent } from './movies/popular/popular.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { TopRatedComponent } from './movies/top-rated/top-rated.component';
import { UpcomingComponent } from './movies/upcoming/upcoming.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { PeopleComponent } from './people/people.component';


export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: 'popular',
        component: PopularComponent
      },
      {
        path: 'top-rated',
        component: TopRatedComponent
      },
      {
        path: 'upcoming',
        component: UpcomingComponent
      },
      {
        path: 'now-playing',
        component: NowPlayingComponent
      },
      {
        path: 'movie-detail/:id',
        component: MovieDetailComponent
      }
       ]
      },
      {
        path: 'tv-shows',
        component: TvShowsComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ];
  
@NgModule({
      imports: [
        CommonModule,
        RouterModule.forRoot(routerConfig)
      ],
      exports: [
        RouterModule
      ],
      declarations: []
    })
export class AppRoutingModule { }
