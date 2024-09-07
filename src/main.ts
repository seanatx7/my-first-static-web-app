import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {
  customer = {
    firstName: '',
    lastName: '',
    email: '',
    question: ''
  };

  onSubmit() {
    console.log(this.customer);
    // Here you would typically send this data to a service or API
    // For now, we'll just log it to the console
  }
}
