import { Component, OnInit } from '@angular/core';
import { TwainService } from '../twain.service';

@Component({
  selector: 'app-twain',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.css']
})
export class TwainComponent implements OnInit {
  intervalId: number;
  quote = '...';

  constructor(private twainService: TwainService) { }

  ngOnInit() {
    this.twainService.getQuote().then(quote => this.quote = quote);
  }

}
