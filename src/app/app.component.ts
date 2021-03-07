/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Article } from './Article';
import { DataService } from './data.service';

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
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.dataSrv.loadArticle().subscribe(result => {
      this.data = result;
    });

  }

  doSearch(str: string) {
    this.search.title = str;
  }
}


