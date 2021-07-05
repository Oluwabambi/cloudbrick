import {trigger, transition, style, animate} from '@angular/animations';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  private fragment: string | undefined;
  showContent: boolean[] = [false, false, false, false];

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    // console.log(history); // This should show you contact-us
    // if (history.state.comingFrom === 'contact-us') {
    //   // ... do your scroll to view.

    scrollTo(0,0)

    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void {
    console.log('frag::', this.fragment);
    try {
      // @ts-ignore
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {
    }
  }

  // for navbar collapse

  // about us
  showUp() {
    const element: any = document.querySelector('#about');
    element.scrollIntoView();
  }


  toggleContent(type: string) {
    switch (type) {
      case 'MOBILE':
        this.showContent[0] = !this.showContent[0];
        break;
      case 'WEB':
        this.showContent[1] = !this.showContent[1];
        break;
      case 'MOBMARK':
        this.showContent[2] = !this.showContent[2];
        break;
      case 'INTERNET':
        this.showContent[3] = !this.showContent[3];
        break;
    }
  }

  

}
  

    

