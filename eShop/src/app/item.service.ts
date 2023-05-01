import { Injectable } from '@angular/core';
import { Item } from 'src/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items: Item[]= [
    {id:1, name: "iPhone", price: 200, quantity:0},
    {id:2, name: "iPhone2", price: 2000, quantity:5},
    {id:3, name: "iPhone3", price: 2500, quantity:5},
    {id:4, name: "iPhone4", price: 2040, quantity:5},
  ];

  itemToBeUpdated: Item=new Item();

  getItems(): Item[]{
    return this.items;
  }

  setItems(items : Item[]){
    this.items=items;
  }
  setItemsToBeUpdateed(i: number){
    this.itemToBeUpdated=this.items[i];
  }
  getItemsToBeUpdateed() :Item{
    return this.itemToBeUpdated;
  }
}
