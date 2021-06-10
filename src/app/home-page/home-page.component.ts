import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faWhatsappSquare=faWhatsappSquare;
  faFacebookMessenger=faFacebookMessenger;

  public puertoCayo: Array<object> = [{
    image: 'assets/Puerto Cayo/1.jpg',
    thumbImage: 'assets/Puerto Cayo/1.jpg',
    alt: 'Puerto Cayo',
    title: 'Terreno en Puerto Cayo'
    }, {
    image: 'assets/Puerto Cayo/2.jpg', 
    thumbImage: 'assets/Puerto Cayo/2.jpg', 
    title: '50$ por metro', 
    alt: 'Image alt', 
    order: 1 
  },
  {
    image: 'assets/Puerto Cayo/3.jpg', 
    thumbImage: 'assets/Puerto Cayo/3.jpg', 
    title: 'Segunda linea de mar',
    alt: 'Segunda linea de mar', 
    order: 1 
  }]

  public AmobladaPortoviejo: Array<object> = [{
    image: 'assets/Amoblada Portoviejo/6.jpg',
    thumbImage: 'assets/Amoblada Portoviejo/6.jpg',
    alt: 'Casa amoblada',
    title: 'Portoviejo'
    },
    {
    image: 'assets/Amoblada Portoviejo/3.jpg', 
    thumbImage: 'assets/Amoblada Portoviejo/3.jpg', 
    title: 'Completamente amoblada', 
    alt: 'Image alt', 
    },
    {
    image: 'assets/Amoblada Portoviejo/2.jpg', 
    thumbImage: 'assets/Amoblada Portoviejo/2.jpg', 
    title: '3 habitaciones',
    alt: 'Segunda linea de mar', 
    },
    ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
