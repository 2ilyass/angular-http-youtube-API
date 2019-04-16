import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';

import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { YoutubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from './youtube/service/youtube-search.service';
import { SearchBoxComponent } from './youtube/search-box/search-box.component';
import { SearchResultComponent } from './youtube/search-result/search-result.component';
import { YoutubeSearchComponent } from './youtube/youtube-search/youtube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
              {provide: YoutubeSearchService, useClass: YoutubeSearchService},
              {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
              { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}

            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
