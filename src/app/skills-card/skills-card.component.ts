import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillItemComponent } from '../common/skill-item/skill-item.component';
import { Card } from '../services/configuration.service';
import { CardItemTypes } from '../enums/card-item-types.enum';
import { SoftSkillItemComponent } from '../common/soft-skill-item/soft-skill-item.component';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [CommonModule, SkillItemComponent,SoftSkillItemComponent],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.css'
})
export class SkillsCardComponent {
  @Input() public Card!: Card
  public itemTypes = CardItemTypes;

  public trackByFn(index: number, item: any) {
    return item.Label;
 }
}
