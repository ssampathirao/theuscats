import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private data = [
    {
      category: 'CATS Events',
      expanded: true,
      products: [
        { id: 0, name: 'Ugadi 2019', price: '8' },
        { id: 1, name: 'Dasserah 2018', price: '5' },
        { id: 2, name: 'DC Central Kitchen', price: '9' },
        
      ]
    }
  ];
 
  private event = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;}

  getEvent() {
    return this.event;
  }

  addProduct(product) {
    this.event.push(product);
  }
}