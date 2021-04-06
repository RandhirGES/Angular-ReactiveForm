import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-part4-reactive-forms',
  templateUrl: './part4-reactive-forms.component.html',
  styleUrls: ['./part4-reactive-forms.component.css']
})
export class Part4ReactiveFormsComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit():void {
    console.log(this.employeeForm.value);
  }
}
