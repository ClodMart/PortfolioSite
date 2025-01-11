import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { CardItem } from 'src/app/services/configuration.service';
import { NgCircleProgressModule } from "../../../../projects/ng-circle-progress/src/lib/ng-circle-progress.module";

@Component({
  selector: 'app-soft-skill-item',
  standalone: true,
  imports: [CommonModule, NgCircleProgressModule],
  templateUrl: './soft-skill-item.component.html',
  styleUrl: './soft-skill-item.component.css'
})
export class SoftSkillItemComponent {
  @Input() public item!: CardItem

  public outerColor: string = "";
  public innerColor: string = "";
  public svgElement: any;
  public style: Object;


  constructor(private renderer: Renderer2){
   this.style = {};
  }
  ngOnInit(): void {
    if(this.item.Color && this.item.Color.length == 1){
      this.innerColor = this.outerColor = this.item.Color as string;
    }
    else{
      let colorArr = (this.item.Color as string[])
      
      this.innerColor = colorArr[1];
      this.outerColor = colorArr[0];
    }

    this.svgElement = this.renderer.createElement(this.item.Image ?? "", 'path');
    this.svgElement.setAttribute('label', this.item.Label);
  }

  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "C2"
    }else if(percent >= 60){
      return "C1"
    }else if(percent >= 45){
      return "B2"
    }else if(percent >= 30){
      return "B1"
    }else if(percent >= 15){
      return "A2"
    }else {
      return "A1"
    }
  }
}
