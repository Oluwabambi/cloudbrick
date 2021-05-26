import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, ViewChild} from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [
  
  //       trigger('slideInLeft',[
  //         transition(':enter', [
  //           style({transform: 'translateY(-100%)'}),
  //           animate('1s ease-in', style({transform: 'translateY(0%)'}))
  //         ]),
  //         transition(':leave',[
  //           animate('1s ease-in', style({transform: 'translateY(-100%)'}))
  //         ])
  //       ])
  //     ]
})

export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
}
  // for navbar collapse
  isShown = false;
    
  // about us
  showUp() {
    const element:any = document.querySelector('#about');
    element.scrollIntoView();
}

//What we do
showContent:boolean[]=[false,false,false,false];
toggleContent(type:string){
  switch(type){
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

