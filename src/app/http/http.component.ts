import { YoutubeSearchService } from './../youtube/service/youtube-search.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  data: Object;
  loading: boolean;
  hide:boolean;


  constructor(private http : HttpClient, private service : YoutubeSearchService) { }

  sendRequest(): void{
    this.hide=true;
    this.loading=true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/4')
    .subscribe(data => {
      this.data=data;
      this.loading=false;
    });
    this.service.search('cat');
  }

  hideRequest(): void{
    this.hide=false;
  }

  deleteData(): void{
    this.data ="...";
  }


  ngOnInit() {
  }

}
