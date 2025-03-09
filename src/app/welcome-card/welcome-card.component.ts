import { Component, OnInit } from '@angular/core';
import { slideUpDown } from '../animations';

@Component({
    selector: 'app-welcome-card',
    imports: [],
    templateUrl: './welcome-card.component.html',
    styleUrl: './welcome-card.component.css',
    animations: []
})
export class WelcomeCardComponent implements OnInit{
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.TextStatus="SecondoStato";
        this.currentIndex = (this.currentIndex + 1) % this.NamesArray.length;
      this.TextStatus="PrimoStato";
        setTimeout(()=>{this.TextStatus = "Default";},350)
    }, 1000);
  }
  public TextStatus = "Default";

  public NamesArray: Array<string>=[
    "everybody", "user", "world", "beautiful", "awesome"
  ]
  public currentIndex = 0;
  public prevIndex = 0;
  intervalId: any;
}
