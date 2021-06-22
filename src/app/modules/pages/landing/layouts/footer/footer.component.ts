import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = '';

  constructor() { }

  ngOnInit(): void {
  }

  showUp() {
    const element: any = document.querySelector('#about');
    element.scrollIntoView();
  }

  subNewsLetter() {
    Swal.fire('Submitted', '', 'success');
  }
  
}
