import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'product-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input("carouselTitle") title: string = "Carousel Title";

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 5,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      easing: 'ease',
      loop: true,
      interval: 4000
    }
  }

  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

    /* This will be triggered after carousel viewed */
    afterCarouselViewedFn(data) {
      console.log(data);
    }
  
    /* It will be triggered on every slide*/
    onmoveFn(data: NgxCarouselStore) {
      console.log(data);
    }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel

}
