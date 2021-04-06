import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-part8-angular-form-builder-example',
  templateUrl: './part8-angular-form-builder-example.component.html',
  styleUrls: ['./part8-angular-form-builder-example.component.css']
})
export class Part8AngularFormBuilderExampleComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: [''],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYear: [''],
        proficiency: ['beginner']
      })
    });
  }

  onSubmit():void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);

    console.log('==========FormGroup method to access form values=========');
    console.log('FullName:', this.employeeForm.value.fullName);
    console.log('Email:', this.employeeForm.value.email);

    console.log('Control:', this.employeeForm.controls.fullName);
    console.log('Control:', this.employeeForm.controls.email);

    console.log('Control with value:', this.employeeForm.controls.fullName.value);
    console.log('Control with value:', this.employeeForm.controls.email.value);

    console.log('Touched:', this.employeeForm.controls.fullName.touched);
    console.log('Touched:', this.employeeForm.controls.email.touched);

    console.log('==========get() method to access form values=========');
    console.log('FullName:', this.employeeForm.get('fullName').value);
    console.log('Email:', this.employeeForm.get('email').value);
  }

  onLoadDataClick(): void {
    //Use setValue to update all form controls
    this.employeeForm.setValue({      
      fullName: 'Randhir Singh',
      email: 'randhir.ges@gmail.com',
      skills: {
        skillName: 'C#',
        experienceInYear: 3,
        proficiency: 'intermediate'
      }
    });

    //Use patchValue to update subset of form controls
    // this.employeeForm.patchValue({      
    //   fullName: 'Randhir Singh',
    //   email: 'randhir.ges@gmail.com',
    //   // skills: {
    //   //   skillName: 'C#',
    //   //   experienceInYear: 3,
    //   //   proficiency: 'intermediate'
    //   // }
    // });
  }
}
