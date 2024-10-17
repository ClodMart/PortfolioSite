import { Component, Input } from '@angular/core';
import { Card } from '../services/configuration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation-card.component.html',
  styleUrl: './presentation-card.component.css'
})
export class PresentationCardComponent {

  @Input() public Card!: Card

}
