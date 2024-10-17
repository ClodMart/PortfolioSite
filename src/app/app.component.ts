import { Component, computed, effect, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { slideInOut } from './animations';
import { appConfig, ConfigsService } from './services/configuration.service';
import { Subscription, take } from 'rxjs';
import { PersonalInfoTypes } from './enums/personal-info-types.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slideInOut
  ]
})

export class AppComponent implements OnDestroy{
  title = 'PortfolioSite';

  intervalId: any;
  public selectedCard= 0;
  public personalInfoTypes = PersonalInfoTypes
  public slideDirection: "left"|"right" = "right";

  private appData: appConfig = {
    Cards:[]
  };
  public ListData: WritableSignal<appConfig> = signal(this.appData);
  private subscription: Subscription;

  constructor(public configsService: ConfigsService){
    this.subscription=this.configsService.GetAppConfig().pipe(take(1)).subscribe(GitConf=>{
      this.ListData?.set(GitConf); 
    }
    );
  }

  ngOnInit() {
    
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
     // Ferma l'intervallo quando il componente viene distrutto
     clearInterval(this.intervalId);
   }

   public trackByFn(index: number, item: any) {
    return item;
 }

 public onNavigate(dir: 'left' | 'right'): void {
  this.slideDirection = dir;
    switch (dir) {
      case 'left':
        if (this.selectedCard === 0) {
          this.selectedCard = this.ListData().Cards.length;
        } else {
          this.selectedCard = this.selectedCard - 1;
        }
        break;
      case 'right':
        if (this.selectedCard === this.ListData().Cards.length) {
          this.selectedCard = 0;
        } else {
          this.selectedCard = this.selectedCard + 1;
        }
    }
  }
}

