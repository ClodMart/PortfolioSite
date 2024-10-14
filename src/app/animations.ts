import { animate, style, transition, trigger,state, AnimationTriggerMetadata } from '@angular/animations';
export const slideUpDown: AnimationTriggerMetadata = trigger('slideUpDown', [
  state('PrimoStato',style({ transform: 'translateY(-50px)' })),
  state('Default',style({transform: 'translateY(0px)'})),
  state('SecondoStato',style({ transform: 'translateY(50px)' })),
  transition('PrimoStato=>*', animate('0.5s ease-out')),
  transition('*=>SecondoStato', animate('0.5s ease-out')),
  transition('PrimoStato=>SecondoStato', animate('0.0s ease-out')),
])
