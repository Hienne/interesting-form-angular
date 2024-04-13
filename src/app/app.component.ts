import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from './address-group/address-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddressGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    displayName: new FormControl('')
  });

  submit() {
    console.log(this.form.getRawValue());
  }
}
