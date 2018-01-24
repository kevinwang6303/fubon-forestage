import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  themeClass = 'theme';

  constructor(
  ) { }

  ngOnInit() {

  }
  setTheme(type: string) {

    this.themeClass = type;
  }
}
