import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InternationalPhoneNumber } from './international-phone-number';

@Component({
  selector: 'app-international-phone-number',
  templateUrl: './international-phone-number.component.html',
  styleUrls: ['./international-phone-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InternationalPhoneNumberComponent
    }
  ]
})
export class InternationalPhoneNumberComponent implements ControlValueAccessor {

  value: InternationalPhoneNumber;
  disabled = false;

  onChange = (value: InternationalPhoneNumber) => {};

  onTouched = () => {};

  constructor() {
  }

  onCountryCodeChange(e: any): void {
    if (this.disabled) {
      return;
    }
    this.value = {...this.value, countryCode: e.target.value};
    this.onChange(this.value);
  }

  onPhoneNumberChange(e: any): void {
    if (this.disabled) {
      return;
    }
    this.value = {...this.value, phoneNumber: e.target.value};
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: InternationalPhoneNumber): void {
    this.value = value;
  }

  markAsTouched(): void {
      this.onTouched();
  }
}
