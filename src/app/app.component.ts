/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search = {
    title: 'demo1'
  };
  data: Article[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Article[]>('../api/articles.json').subscribe(result => {
      this.data = result;
    });

  }

  doSearch(str: string) {
    this.search.title = str;
  }
}


