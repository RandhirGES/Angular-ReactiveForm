import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { customValidators } from 'src/app/shared/custom.validators';

@Component({
  selector: 'app-part20-creating-form-array-of-form-group-objects-in-angular',
  templateUrl: './part20-creating-form-array-of-form-group-objects-in-angular.component.html',
  styleUrls: ['./part20-creating-form-array-of-form-group-objects-in-angular.component.css']
})
export class Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent implements OnInit {
  employeeForm: FormGroup;
  validationMessages = {
    'fullName': {
      'required': 'Full name is required.',
      'minlength': 'Full name must be greater than 2 characters.',
      'maxlength': 'Full name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.',
      'emailDomain': 'Email domain should be test.com',
    },
    'confirmEmail': {
      'required': 'Confirm email is required.',
    },
    'emailGroup': {
      'emailMismatch': 'Email and Confirm Email do not match',
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
    'confirmEmail': '',
    'emailGroup': '',
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
      emailGroup: this.fb.group({
        email: ['', [Validators.required, customValidators.emailDomain('dell.com')]],
        confirmEmail: ['', Validators.required],
      }, { validator: matchEmail }),
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
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  onLoadDataClick(): void {
    // this.logValidationErrors(this.employeeForm);
    //console.log(this.formErrors);

    const formArray = new FormArray([
      new FormControl('Randhir', Validators.required),
      new FormGroup({
        country: new FormControl('', Validators.required)
      }),
      new FormArray([])
    ]);

    // console.log(formArray.length);

    // for(const control of formArray.controls) {
    //   if(control instanceof FormControl) {
    //     console.log('Control is Form Control');
    //   }
    //   if(control instanceof FormGroup) {
    //     console.log('Control is Form Group');
    //   }
    //   if(control instanceof FormArray) {
    //     console.log('Control is Form Array');
    //   }
    // }

    const formArray1 = this.fb.array([ // Serialized as object
      new FormControl('Randhir', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('', Validators.required),
    ]);

    formArray1.push(new FormControl('Male', Validators.required));
    console.log(formArray1.at(3).value);
    //console.log(formArray1.value);

    const formGroup = this.fb.group([ // Serialized as array
      new FormControl('Randhir', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('', Validators.required),
    ]);

    // console.log(formGroup.value); // Return Array
    // console.log(formArray1.value); // Return Object

    console.log(formGroup); // Return Object
    console.log(formArray1); // Return Array
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

function matchEmail(group: AbstractControl): { [key: string]: any } | null {
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');

  if (emailControl.value === confirmEmailControl.value || confirmEmailControl.pristine) {
    return null;
  } else {
    return { 'emailMismatch': true };
  }
}
