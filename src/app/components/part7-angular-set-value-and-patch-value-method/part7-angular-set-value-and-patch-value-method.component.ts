import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-part7-angular-set-value-and-patch-value-method',
  templateUrl: './part7-angular-set-value-and-patch-value-method.component.html',
  styleUrls: ['./part7-angular-set-value-and-patch-value-method.component.css']
})
export class Part7AngularSetValueAndPatchValueMethodComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Create skills form group
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYear: new FormControl(),
        proficiency: new FormControl()
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
