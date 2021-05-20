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
  
  // for navbar collapse
  isShown = false;
  constructor() { }

  ngOnInit(): void {
    
  

}
  
    
} 

