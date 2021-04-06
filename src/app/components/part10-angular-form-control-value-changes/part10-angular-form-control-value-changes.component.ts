import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-part10-angular-form-control-value-changes',
  templateUrl: './part10-angular-form-control-value-changes.component.html',
  styleUrls: ['./part10-angular-form-control-value-changes.component.css']
})
export class Part10AngularFormControlValueChangesComponent implements OnInit {

  employeeForm: FormGroup;
  fullNameLength = 0;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: [''],
        experienceInYear: [''],
        proficiency: ['beginner']
      })
    });

    this.employeeForm.get('fullName').valueChanges.subscribe((value: string) => {
      this.fullNameLength = value.length;
    });

    this.employeeForm.valueChanges.subscribe((value: any) => {
      console.log(JSON.stringify(value));
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
