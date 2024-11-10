import { Component, Input } from '@angular/core';
import { Card } from '../services/configuration.service';
import { CommonModule } from '@angular/common';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { CardItemTypes } from '../enums/card-item-types.enum';

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [CommonModule, SkillItemComponent],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {

  @Input() public Card!: Card
  public itemTypes = CardItemTypes;

  public trackByFn(index: number, item: any) {
    return item.Label;
 }
}
