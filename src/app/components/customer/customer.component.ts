import { Component } from '@angular/core';
import { EventButtonComponent } from '../eventbutton/eventbutton.component';

@Component({
  selector: 'app-customer',
  standalone: true, 
  imports: [EventButtonComponent],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  message = [
    { name: 'Edward Newgate', role: 'Founder Circle', image: 'assets/edward-newgate.png', message: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.' },
    { name: 'Mark Zukerberg', role: 'CEO of Facebook', image: 'assets/mark-zukerberg.png', message: 'I highly recommend this service ! It help a lot facebook' }
  ];

  customer_index = 0;

  previous_message() {
    this.customer_index = this.customer_index === 0 ? this.message.length - 1 : this.customer_index - 1;
  }

  next_message() {
    this.customer_index = this.customer_index === this.message.length - 1 ? 0 : this.customer_index + 1;
  }


  get customer() {
    return this.message[this.customer_index];
  }
}