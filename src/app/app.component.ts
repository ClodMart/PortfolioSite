import { Component, computed, effect, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { slideInOut } from './animations';
import { appConfig, ConfigsService } from './services/configuration.service';
import { Subscription, take } from 'rxjs';
import { CardTypes } from './enums/card-types.enum';
import { horizontalDirections } from './enums/slide-directions.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        slideInOut
    ],
    standalone: false
})

export class AppComponent implements OnDestroy{

  title = 'PortfolioSite';

  intervalId: any;
  public selectedCard= 0;
  public personalInfoTypes = CardTypes
  public slideDirection = signal(horizontalDirections.right);
  public slideDirections = horizontalDirections;

  private appData: appConfig = {
    LinkedinUrl:"",
    Curriculum:"",
    AvatarImg:"",
    Cards:[]
  };
  public ListData: WritableSignal<appConfig> = signal(this.appData);
  private subscription: Subscription;

  constructor(public configsService: ConfigsService){
    this.subscription=this.configsService.GetAppConfig().pipe(take(1)).subscribe(GitConf=>{
      this.ListData?.set(GitConf); 
    });
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
     // Ferma l'intervallo quando il componente viene distrutto
     clearInterval(this.intervalId);
   }

   public trackByFn(index: number, item: any) {
    return item;
 }

 public async onNavigate(dir: horizontalDirections) {
  this.slideDirection.set(dir);
  var tempSelected =  this.selectedCard;
  await new Promise(f => setTimeout(f, 1));
  this.selectedCard = -1;
  await new Promise(f => setTimeout(f, 300));
    switch (dir) {
      case 'left':
        if (tempSelected === 0) {
          this.selectedCard = this.ListData().Cards.length;
        } else {
          this.selectedCard = tempSelected -1;
        }
        break;
      case 'right':
        if (tempSelected === this.ListData().Cards.length) {
          this.selectedCard = 0;
        } else {
          this.selectedCard = tempSelected + 1;
        }
    }
  }

  public OpenLinkedin() {
    this.configsService.GetAppConfig().pipe(take(1)).subscribe(x=>{
      window.open(x.LinkedinUrl, "_blank");
    });
  }

  public openCurriculum(){
    this.configsService.GetAppConfig().pipe(take(1)).subscribe(x=>{
      window.open("./assets/mainPage/" + this.ListData().Curriculum, "_blank");
    });
  }
}

