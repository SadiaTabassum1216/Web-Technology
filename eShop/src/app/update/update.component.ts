import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(private itemService: ItemService,  private route: Router){}

  myItem: Item= new Item();

  ngOnInit(): void {
    this.myItem=this.itemService.getItemsToBeUpdateed();
  }

  goback(){
    this.route.navigate(["items"]);
  }


}
