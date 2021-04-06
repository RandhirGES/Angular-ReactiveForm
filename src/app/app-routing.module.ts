import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';

import { Part1CreatingAngularProjectComponent } from './components/part1-creating-angular-project/part1-creating-angular-project.component';
import { Part2InstallBootstrapForAngularComponent } from './components/part2-install-bootstrap-for-angular/part2-install-bootstrap-for-angular.component';
import { Part3AngularRoutingComponent } from './components/part3-angular-routing/part3-angular-routing.component';
import { Part4ReactiveFormsComponent } from './components/part4-reactive-forms/part4-reactive-forms.component';
import { Part5AngularFormControlAndFormGroupComponent } from './components/part5-angular-form-control-and-form-group/part5-angular-form-control-and-form-group.component';
import { Part6AngularNestedFormGroupComponent } from './components/part6-angular-nested-form-group/part6-angular-nested-form-group.component';
import { Part7AngularSetValueAndPatchValueMethodComponent } from './components/part7-angular-set-value-and-patch-value-method/part7-angular-set-value-and-patch-value-method.component';
import { Part8AngularFormBuilderExampleComponent } from './components/part8-angular-form-builder-example/part8-angular-form-builder-example.component';
import { Part9AngularReactiveFormsValidationComponent } from './components/part9-angular-reactive-forms-validation/part9-angular-reactive-forms-validation.component';
import { Part10AngularFormControlValueChangesComponent } from './components/part10-angular-form-control-value-changes/part10-angular-form-control-value-changes.component';
import { Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent } from './components/part11-loop-through-all-form-controls-in-form-group-in-reactive-forms/part11-loop-through-all-form-controls-in-form-group-in-reactive-forms.component';
import { Part12MoveValidationMessageToComponentClassComponent } from './components/part12-move-validation-message-to-component-class/part12-move-validation-message-to-component-class.component';
import { Part13MoveValidationLogicToComponentClassComponent } from './components/part13-move-validation-logic-to-component-class/part13-move-validation-logic-to-component-class.component';
import { Part14DynamicallyAddingRemovingFormControlValidatorsComponent } from './components/part14-dynamically-adding-removing-form-control-validators/part14-dynamically-adding-removing-form-control-validators.component';
import { Part15AngularReactiveFormCustomValidatorComponent } from './components/part15-angular-reactive-form-custom-validator/part15-angular-reactive-form-custom-validator.component';
import { Part16AngularReactiveFormCustomValidatorWithParameterComponent } from './components/part16-angular-reactive-form-custom-validator-with-parameter/part16-angular-reactive-form-custom-validator-with-parameter.component';
import { Part17MakeCustomValidatorReusableComponent } from './components/part17-make-custom-validator-reusable/part17-make-custom-validator-reusable.component';
import { Part18AngularReactiveFormCrossFieldValidationComponent } from './components/part18-angular-reactive-form-cross-field-validation/part18-angular-reactive-form-cross-field-validation.component';
import { Part19AngularFormArrayExampleComponent } from './components/part19-angular-form-array-example/part19-angular-form-array-example.component';
import { Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent } from './components/part20-creating-form-array-of-form-group-objects-in-angular/part20-creating-form-array-of-form-group-objects-in-angular.component';
import { Part21AngularDynamicFormsTutorialComponent } from './components/part21-angular-dynamic-forms-tutorial/part21-angular-dynamic-forms-tutorial.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'part1', component: Part1CreatingAngularProjectComponent },
  { path: 'part2', component: Part2InstallBootstrapForAngularComponent },
  { path: 'part3', component: Part3AngularRoutingComponent },
  { path: 'part4', component: Part4ReactiveFormsComponent },
  { path: 'part5', component: Part5AngularFormControlAndFormGroupComponent },
  { path: 'part6', component: Part6AngularNestedFormGroupComponent },
  { path: 'part7', component: Part7AngularSetValueAndPatchValueMethodComponent },
  { path: 'part8', component: Part8AngularFormBuilderExampleComponent },
  { path: 'part9', component: Part9AngularReactiveFormsValidationComponent },
  { path: 'part10', component: Part10AngularFormControlValueChangesComponent },
  { path: 'part11', component: Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent },
  { path: 'part12', component: Part12MoveValidationMessageToComponentClassComponent },
  { path: 'part13', component: Part13MoveValidationLogicToComponentClassComponent },
  { path: 'part14', component: Part14DynamicallyAddingRemovingFormControlValidatorsComponent },
  { path: 'part15', component: Part15AngularReactiveFormCustomValidatorComponent },
  { path: 'part16', component: Part16AngularReactiveFormCustomValidatorWithParameterComponent },
  { path: 'part17', component: Part17MakeCustomValidatorReusableComponent },
  { path: 'part18', component: Part18AngularReactiveFormCrossFieldValidationComponent },
  { path: 'part19', component: Part19AngularFormArrayExampleComponent },
  { path: 'part20', component: Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent },
  { path: 'part21', component: Part21AngularDynamicFormsTutorialComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRouting = [IndexComponent, HeaderComponent, FooterComponent,
  Part1CreatingAngularProjectComponent,
  Part2InstallBootstrapForAngularComponent,
  Part3AngularRoutingComponent,
  Part4ReactiveFormsComponent,
  Part5AngularFormControlAndFormGroupComponent,
  Part6AngularNestedFormGroupComponent,
  Part7AngularSetValueAndPatchValueMethodComponent,
  Part8AngularFormBuilderExampleComponent,
  Part9AngularReactiveFormsValidationComponent,
  Part10AngularFormControlValueChangesComponent,
  Part11LoopThroughAllFormControlsInFormGroupInReactiveFormsComponent,
  Part12MoveValidationMessageToComponentClassComponent,
  Part13MoveValidationLogicToComponentClassComponent,
  Part14DynamicallyAddingRemovingFormControlValidatorsComponent,
  Part15AngularReactiveFormCustomValidatorComponent,
  Part16AngularReactiveFormCustomValidatorWithParameterComponent,
  Part17MakeCustomValidatorReusableComponent,
  Part18AngularReactiveFormCrossFieldValidationComponent,
  Part19AngularFormArrayExampleComponent,
  Part20CreatingFormArrayOfFormGroupObjectsInAngularComponent,
  Part21AngularDynamicFormsTutorialComponent,
  PageNotFoundComponent];
