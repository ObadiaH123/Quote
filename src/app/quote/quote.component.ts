import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1,'"The purpose of our lives is to be happy."','Dalai Lama'),
    new Quote(2,'"You only live once, but if you do it right, once is enough."','Mae West'),
    new Quote(3,'"Get busy living or get busy dying."','Stephen King'),
    new Quote(4,'"Life is what happens when you’re busy making other plans"','John Lennon'),
    new Quote(5,'"Never say die','Roman King"')
  ];
  toggleDetails(index){
    this.quotes[index].showName=!this.quotes[index].showName;
  }
  deleteQuote(deletequoteevent, index){
    if (deletequoteevent) {
      this.quotes.splice(index,1);
    }
  };
  likeQuote(likequoteevent, index){
    if (likequoteevent) {
      this.quotes[index].upvote++;
    }
  };
  dislikeQuote(dislikequoteevent, index){
    if (dislikequoteevent) {
      this.quotes[index].downvote++;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}