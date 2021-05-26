import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
  // for navbar collapse
  isShown=false;

  constructor() { }
  ngOnInit(): void {
  }
//service-describe
myText: string =`With us, you get a professionally
designed website that can be customized according to your requirements. 
We ensure that your website puts you on top of your competitors.`
;
  generalChangeText(type: string) {
    switch (type) {
      case 'WEB':
      
        this.myText = `t-start" src="./assets/web dev.png" alt="Web Dev">
        this the web`;
        break;
        case 'MOBILE':
          this.myText=`this the mobile`;
        break;
        case 'CONTENT':
          this.myText=`this the content`;
        break;
        case 'MOBMARK':
          this.myText=`this the mobile marketing`;
        break;
        case 'INTERNET':
          this.myText=`this the internet`;
        break;
        default:
          this.myText=`With us, you get a professionally
          designed website that can be customized according to your requirements. 
         We ensure that your website puts you on top of your competitors.`
            
    }
  }

}

