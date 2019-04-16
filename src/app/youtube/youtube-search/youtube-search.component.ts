import { SearchResult } from './../search-result';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  results: SearchResult[];


  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void{
    this.results= results;
  }

}
