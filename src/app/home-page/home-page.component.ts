import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faWhatsappSquare=faWhatsappSquare;
  
  constructor() { }

  ngOnInit(): void {
  }

}
