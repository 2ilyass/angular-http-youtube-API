import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { YoutubeSearchService } from '../service/youtube-search.service';
import { SearchResult } from '../search-result';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {


  test: boolean = false;


  @Output()
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();


  constructor(private youtube : YoutubeSearchService,
              private el : ElementRef) { }

  ngOnInit() {
      Observable.fromEvent(this.el.nativeElement,'keyup')
                .map((e: any) => e.target.value)
                .filter((text: string) => text.length > 1)
                .debounceTime(250)
                .do(() => this.test=true)
                .map((query: string) => this.youtube.search(query))
                .switch()
                .subscribe((results: SearchResult[]) => {                             
                              this.test=false;
                              this.results.emit(results);                           
                          },
                          (err: any) => {
                            console.log(err);
                            this.test = false;
                          },
                          () => {
                            this.test = false;
                          }
      );
  }

}
