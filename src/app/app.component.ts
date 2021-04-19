import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InternationalPhoneNumber } from './phone-info/international-phone-number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-form-cva-sample';
  sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sampleForm = formBuilder.group({
      mainContact: new FormControl({
        value: {
          countryCode: '84',
          phoneNumber: '982654321'
        }, disabled: true
      }),
      emergencyContact: [{
        countryCode: '84',
        phoneNumber: '982123456'
      } as InternationalPhoneNumber]
    });
  }

  ngOnInit(): void {
    this.sampleForm.valueChanges.subscribe(value => console.log('FORM VALUES CHANGE:', value));
  }
}
