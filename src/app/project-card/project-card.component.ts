import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardItemTypes } from '../enums/card-item-types.enum';
import { Card } from '../services/configuration.service';
import { ProjectItemComponent } from "./project-item/project-item.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() public Card!: Card
  public itemTypes = CardItemTypes;


  public trackByFn(index: number, item: any) {
    return item.Label;
 }
}
