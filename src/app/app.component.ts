import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info;
  constructor(private formBuilder: FormBuilder){
  this.info = this.formBuilder.group({
  name: '',
  email: '',
  attendees: '',
  position:'',
  department:'',
  date:'',
  StartTime:'',
  EndTime:'',
  SpecialInstruction:'',
  })
  }

  onSubmit(values){
  console.warn("Form Submit", values) 
  }
  }