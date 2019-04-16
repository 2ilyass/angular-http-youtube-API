import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {


  @Input()
  result: SearchResult;

  constructor() { }

  ngOnInit() {
  }


  randFunction(): number {
    return Math.floor(Math.random() * Math.floor(500000));
  }


}
