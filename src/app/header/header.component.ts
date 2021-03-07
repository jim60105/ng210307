import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sitename = 'The Will Will Web';
  sitelogo = '/assets/images/logo.png';

  constructor() { }

  changeName($event: MouseEvent) {
    console.log($event);
    if ($event.ctrlKey) {
      this.sitename = 'Click SiteName';
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'New SiteName';
    }, 2000);
  }

}
