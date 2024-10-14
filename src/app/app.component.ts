import { Component, OnInit, signal } from '@angular/core';
import {  animate} from '@angular/animations';
import { slideUpDown } from './animations';
import { ConfigsService, GithubConfig } from './services/configuration.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideUpDown]
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

  //private _gitData: GithubConfig;

  constructor(public configsService: ConfigsService){
  
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.TextStatus="SecondoStato";
        this.currentIndex = (this.currentIndex + 1) % this.NamesArray.length;
      this.TextStatus="PrimoStato";
        setTimeout(()=>{this.TextStatus = "Default";},350)
    }, 1000);
  }

   ngOnDestroy() {
     // Ferma l'intervallo quando il componente viene distrutto
     clearInterval(this.intervalId);
   }

   public trackByFn(index: number, item: any) {
    return item.ProjectName;
 }
}

