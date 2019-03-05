import { Component } from '@angular/core';
//import { Slides } from '@ionic/angular';
import { NgModule, Component, ViewChild, Slides } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalleryPage } from './gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalleryPage]
})


export class GalleryPageModule {
	
@ViewChild('slideWithNav') slideWithNav: Slides;
images = ['../../assets/img/gold/image1.jpg', '../../assets/img/gold/image2.jpg', '../../assets/img/gold/image3.jpg', '../../assets/img/gold/image4.jpg'];
sliderGal: any;

slideOptsGal = {
    initialSlide: 0,
    slidesPerView: 7,
    autoplay:true,
	spaceBetween: 15,
	centeredSlides:true	
  }; 

constructor() {

    this.sliderGal =
    {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../../assets/img/gold/image1.jpg'
          },
          {
            id: 2,
            image: '../../assets/img/gold/image2.jpg'
          },
          {
            id: 3,
            image: '../../assets/img/gold/image3.jpg'
          },
          {
            id: 4,
            image: '../../assets/img/gold/image4.jpg'
          },
          {
            id: 5,
            image: '../../assets/img/gold/image5.jpg'
          },
          {
            id: 6,
            image: '../../assets/img/gold/image6.png'
          },	
          {
            id: 7,
            image: '../../assets/img/gold/image7.jpg'
          },
          {
            id: 8,
            image: '../../assets/img/gold/image8.jpg'
          },
          {
            id: 9,
            image: '../../assets/img/gold/image9.png'
          },
          {
            id: 10,
            image: '../../assets/img/gold/image10.jpg'
          },
          {
            id: 11,
            image: '../../assets/img/gold/image11.jpg'
          }		  
        ]
    };
	
}

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
 
  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }
 
  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
 
  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
 
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }		
}
