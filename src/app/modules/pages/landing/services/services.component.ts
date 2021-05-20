import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  myText: string =`With us, you get a professionally
  designed website that can be customized according to your requirements. 
 We ensure that your website puts you on top of your competitors.`
;
  // for navbar collapse
  isShown=false;

  constructor() { }
  changeText(){
    this.myText=`this the web`;
  }
  changeText1(){
    this.myText=`this the mobile`;
  }
  changeText2(){
    this.myText=`this the content`;
  }
  changeText3(){
    this.myText=`this the mobile marketing`;
  }
  changeText4(){
    this.myText=`this the internet`;
  }

  ngOnInit(): void {
  }

}
