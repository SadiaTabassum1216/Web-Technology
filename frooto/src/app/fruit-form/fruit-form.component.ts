import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { fruit } from 'src/fruit';

@Component({
  selector: 'app-fruit-form',
  templateUrl: './fruit-form.component.html',
  styleUrls: ['./fruit-form.component.css']
})
export class FruitFormComponent implements OnInit {

  fruit: fruit = new fruit();

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post<any>('http://localhost:8000/fruits', this.fruit).subscribe(data => {
      console.log(data);
    });
    
    this.fruit = new fruit();
    this.router.navigate(['/list']);
    
  }

}
