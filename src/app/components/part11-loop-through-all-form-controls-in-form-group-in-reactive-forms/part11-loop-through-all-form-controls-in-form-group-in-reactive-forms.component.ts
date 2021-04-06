import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-part11-loop-through-all-form-controls-in-form-group-in-reactive-forms',
  templateUrl: './part11-loop-through-all-form-controls-in-form-group-in-reactive-forms.component.html',
  styleUrls: ['./part11-loop-through-all-form-controls-in-form-group-in-reactive-forms.component.css']
})
export class Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent implements OnInit {

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


  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if(abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        console.log('Key = ' + key + ' Value =' + abstractControl.value);
        abstractControl.disable();
      }
    });
  }


  onLoadDataClick(): void {
    this.logKeyValuePairs(this.employeeForm);
  }

}
