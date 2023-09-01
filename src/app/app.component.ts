import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { interval } from 'rxjs';
import { slideUpDown } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[animate('slideUpDown')]
})

export class AppComponent{
  title = 'PortfolioSite';
  public TextStatus = "Default";

  public NamesArray: Array<string>=[
    "everybody", "user", "world", "beautiful", "awesome"
  ]
  public currentIndex = 0;
  public prevIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.TextStatus="SecondoStato";
        this.currentIndex = (this.currentIndex + 1) % this.NamesArray.length;
      this.TextStatus="PrimoStato";
        setTimeout(()=>{this.TextStatus = "Default";},500)
    }, 2000);
  }

   ngOnDestroy() {
     // Ferma l'intervallo quando il componente viene distrutto
     clearInterval(this.intervalId);
   }
}

