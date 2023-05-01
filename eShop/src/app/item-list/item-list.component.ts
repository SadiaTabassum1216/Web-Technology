import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  constructor(private itemService: ItemService, private route: Router){}
  myItems: Item[] = [];
  ngOnInit(): void {
    this.myItems = this.itemService.getItems();
  }

  requestItem(name : String){
    
    for(let item of  this.myItems){
        if(item.name==name){
          item.quantity--;
        }
    }  
    this.itemService.setItems(this.myItems);
  }

  updateItems(i: number){
    this.itemService.setItemsToBeUpdateed(i);
    this.route.navigate(["update"]);
  }

}
