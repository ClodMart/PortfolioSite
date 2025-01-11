import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from 'src/app/services/configuration.service';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.css'
})
export class SkillItemComponent implements OnInit {

  @Input() public item!: CardItem
  public style: Object;
  constructor(){
   this.style = {};
  }
  ngOnInit(): void {
    if(this.item.Color){
      this.style = {"background-color": this.item.Color as string}
    }
  }
}
