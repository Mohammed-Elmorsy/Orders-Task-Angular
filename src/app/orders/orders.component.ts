import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  products: Product[] = [
    {imageURL: 'assets/trouser.jpg', title: 'Grey Trouser', color: 'Grey', size: 'L', price: 45, quantity: 0},
    {imageURL: 'assets/T-shirt.jpg', title: 'Court Dry fit', color: 'Blue', size: 'L', price: 45, quantity: 0},
    {imageURL: 'assets/sweet-shirt.jpg', title: 'Sports Wear', color: 'Black', size: 'L', price: 45, quantity: 0},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
