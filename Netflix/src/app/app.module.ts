import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesComponent } from './movies/movies.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PopularComponent } from './movies/popular/popular.component';
import { TopRatedComponent } from './movies/top-rated/top-rated.component';
import { UpcomingComponent } from './movies/upcoming/upcoming.component';
import { NowPlayingComponent } from './movies/now-playing/now-playing.component';
import { HeaderComponent } from './top-navigation/header/header.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { SidenavComponent } from './top-navigation/sidenav/sidenav.component';
import { MovieService } from './movie.service';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { FilterItemsPipe } from './filter-items.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TopNavigationComponent,
    PopularComponent,
    TopRatedComponent,
    UpcomingComponent,
    NowPlayingComponent,
    HeaderComponent,
    SidenavComponent,
    SearchComponent,
    PeopleComponent,
    TvShowsComponent,
    FavoritesComponent,
    FilterItemsPipe,
    MovieDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    [FlexLayoutModule],
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    YouTubePlayerModule,
    MatCardModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    [FlexLayoutModule],
    MatFormFieldModule,
    MatInputModule, 
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
