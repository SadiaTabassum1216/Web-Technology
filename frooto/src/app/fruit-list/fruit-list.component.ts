import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fruit } from 'src/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  fruits: fruit[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/fruits').subscribe(data => {
      this.fruits = data;
      // console.log(data);
      // console.log(this.fruits);
    });
  }



}
