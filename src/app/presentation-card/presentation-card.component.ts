import { Component, Input } from '@angular/core';
import { Card } from '../services/configuration.service';
import { CommonModule } from '@angular/common';
import { CardItemTypes } from '../enums/card-item-types.enum';

@Component({
    selector: 'app-presentation-card',
    imports: [CommonModule],
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
