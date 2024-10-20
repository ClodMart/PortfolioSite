import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, signal, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { CardItem } from 'src/app/services/configuration.service';
import { SkillItemComponent } from "../../presentation-card/skill-item/skill-item.component";
import { CardItemTypes } from 'src/app/enums/card-item-types.enum';
import { MatDividerModule } from '@angular/material/divider';
import { slideInOutFixed, slideUpInOut } from 'src/app/animations';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, SkillItemComponent, MatDividerModule],
  animations:[slideInOutFixed, slideUpInOut],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {

  @Input() public items!: CardItem[];
  @ViewChild('ProjectSelector') projectSelector?: ElementRef;

  public changing: boolean = false;
  public selected= signal(0);
  public slideDirection: "up"|"down" = "down";
  public itemTypes = CardItemTypes;
  
  public trackByFn(index: number, item: any) {
    return item.Label;
 }

 async changeSelected(event: WheelEvent) {
   this.changing = true;
   console.log(event);
   if (event.deltaY < 0 && this.selected()>0)
    {
     await new Promise(f => setTimeout(f, 300));
     this.selected.set(this.selected() - 1) ;
     await new Promise(f => setTimeout(f, 300));
    }
    else if (event.deltaY > 0 && this.selected() < this.items.length-1)
    {
      await new Promise(f => setTimeout(f, 300));
      this.selected.set(this.selected() + 1) ;
      await new Promise(f => setTimeout(f, 300));
    }
    this.changing = false;
  }

  async changeSelectedClick(event: MouseEvent) {
    this.changing = true;
    console.log(event);
    if (this.selected() < this.items.length-1)
     {
       await new Promise(f => setTimeout(f, 300));
       this.selected.set(this.selected() + 1) ;
       await new Promise(f => setTimeout(f, 300));
     }
     else{
      await new Promise(f => setTimeout(f, 300));
      this.selected.set(0) ;
      await new Promise(f => setTimeout(f, 300));
     }
     this.changing = false;
   }
}
