import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShown = false;

  constructor() { }

  ngOnInit(): void {
    scrollTo(0,0)
  }

  toTop() {
    const firstView: any = document.querySelector('#first');
    firstView.scrollIntoView();
  }

  showUp() {
    const element: any = document.querySelector('#about');
    element.scrollIntoView();
  }

}