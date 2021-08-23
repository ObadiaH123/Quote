import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'Awesome quotes';
  quotes:Quote[] = [
    new Quote (1,'Salim Kiprono','Programming Quote','stack developer is  web developer or engineer who works with both the front and back ends of a website or application—meaning they can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects.','Bill Gates', new Date(2021,3,14),0,0),
    new Quote (2,'Dorcas Chebet','Love Quotes','Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.','L C Devis',new Date(2020,7,10),0,0),
    new Quote (3,'Den Motigo','Motivational Quotes','Learn as if you will live forever, live like you will die tomorrow.','Mahatma Gadhi',new Date(2020,2,1),0,0)
    
  ];

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  

  addedQuote(quote){
    let arraysize = this.quotes.length;                  
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }

  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
