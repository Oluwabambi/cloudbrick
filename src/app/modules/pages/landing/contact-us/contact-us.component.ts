  
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // for navbar collapse
  isShown = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAbout() {
    return this.router.navigate(['/home'],
     {state: {comingFrom: 'contact-us'}});
  }

}
