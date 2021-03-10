/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  data$!: Observable<Article[]>;
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.data$ = this.dataSrv.loadArticle();
  }

  doSearch(str: string) {
    this.search.title = str;
  }

  doDelete(id: number) {
    console.log(`刪除id為${id}的文章`);
  }
}


