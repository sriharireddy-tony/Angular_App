import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Manu';
  constructor(private fb:FormBuilder){
    
  }

  city=['nellore','tirupathi','Hyderabad']

  regForm = this.fb.group({
    Name: [''],
    Age: [''],
    City: [""]
  })
}
