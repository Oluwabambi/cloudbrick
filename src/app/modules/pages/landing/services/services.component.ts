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
      
        this.myText = `With us, you get a professionally
        designed website that can be customized according to your requirements. 
        We ensure that your website puts you on top of your competitors`;
        break;
        case 'MOBILE':
          this.myText=`Our team of programmers and designers are committed to developing the best mobile services, products and applications available in the constantly evolving world of mobile technology.`;
        break;
        case 'CONTENT':
          this.myText=`Stop wasting your time, let us do the writing for you! Our solution will provide you with unique textual content. Not duplicated or plagiarized. Completely and entirely unique.`;
        break;
        case 'MOBMARK':
          this.myText=`Our promotional activity is designed for delivery to cell phones, smart phones and other handheld devices, usually as a component of a multi-channel campaign.`;
        break;
        case 'INTERNET':
          this.myText=`We have advertising and marketing channels that use the Web and email to drive direct sales via electronic commerce, in addition to sales leads from Web sites or emails.`;
        break;
        default:
          this.myText=`With us, you get a professionally
          designed website that can be customized according to your requirements. 
         We ensure that your website puts you on top of your competitors.`
            
    }
  }

}