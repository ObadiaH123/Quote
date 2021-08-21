import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'We must not allow other people’s limited perceptions to define us', 'Virginia Satir'),
    new Quote(2,'Do what you can, with what you have, where you are.', 'Theodore Rooselvelt'),
    new Quote(3,'Be yourself; everyone else is already taken', 'Oscar Wilde'),
    new Quote(4,'This above all: to thine own self be true', 'William Shakespeare'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
