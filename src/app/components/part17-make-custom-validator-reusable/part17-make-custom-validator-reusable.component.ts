import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { customValidators } from 'src/app/shared/custom.validators';


@Component({
  selector: 'app-part17-make-custom-validator-reusable',
  templateUrl: './part17-make-custom-validator-reusable.component.html',
  styleUrls: ['./part17-make-custom-validator-reusable.component.css']
})
export class Part17MakeCustomValidatorReusableComponent implements OnInit {
  employeeForm: FormGroup;
  validationMessages = {
    'fullName': {
      'required': 'Full name is required.',
      'minlength': 'Full name must be greater than 2 characters.',
      'maxlength': 'Full name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email name is required.',
      'emailDomain': 'Email domain should be test.com',
    },
    'phone': {
      'required': 'Phone is required.',
    },
    'skillName': {
      'required': 'Skill name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };

  formErrors = {
    'fullName': '',
    'email': '',
    'phone': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference: ['email'],
      email: ['', [Validators.required, customValidators.emailDomain('dell.com')]],
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      })
    });

    this.employeeForm.get('contactPreference').valueChanges.subscribe((data: string) => {
      this.onContactPreferenceChange(data);
    });
  }

  onSubmit(): void {
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


  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          // console.log(messages);
          // console.log(abstractControl.errors);
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  onLoadDataClick(): void {
    // this.logValidationErrors(this.employeeForm);
    //console.log(this.formErrors);
  }

  onContactPreferenceChange(selectedValue: string) {
    const phoneControl = this.employeeForm.get('phone');
    if (selectedValue === 'phone') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}

