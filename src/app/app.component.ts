import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Quote';
  quotes: Quote[]=[
    {id: 1, author: 'Virginia Satir', text: 'We must not allow other people’s limited perceptions to define us'},
    {id: 2, author: 'Theodore Roosevelt', text: 'Do what you can, with what you have, where you are.'},
    {id: 3, author: 'Oscar Wilde', text: 'Be yourself; everyone else is already taken'},
    {id: 4, author: 'William Shakespeare', text: 'This above all: to thine own self be true'},
  ];
}