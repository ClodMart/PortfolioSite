import { animate, style, transition, trigger,state, AnimationTriggerMetadata, keyframes } from '@angular/animations';
export const slideUpDown: AnimationTriggerMetadata = trigger('slideUpDown', [
  state('PrimoStato',style({ transform: 'translateY(-50px)' })),
  state('Default',style({transform: 'translateY(0px)'})),
  state('SecondoStato',style({ transform: 'translateY(50px)' })),
  transition('PrimoStato=>*', animate('0.5s ease-out')),
  transition('*=>SecondoStato', animate('0.5s ease-out')),
  transition('PrimoStato=>SecondoStato', animate('0.0s ease-out')),
])

export const slideInOut = trigger("slideInOut", [
    transition(":enter", [
        style({transform: "translateX({{start}}100%)" }),
        animate("0.3s ease-out", keyframes([
          style({ transform: "translateX(0)" })
        ])
      )
    ]),
    transition(":leave", [
        style({ transform: "translateX(0)" }),
        animate("0.3s ease-out", keyframes([
          style({ transform: "translateX({{end}}100%)"}),
        ]))
    ])
  ])

  export const slideInOutFixed = trigger("slideInOutFixed", [
    transition(":enter", [
        style({transform: "translateX({{start}}50%)", opacity: "0%" }),
        animate("0.3s ease-out", keyframes([
          style({ transform: "translateX(0)", opacity: "100%" })
        ])
      )
    ]),
    transition(":leave", [
        style({ transform: "translateX(0)", opacity: "100%"  }),
        animate("0.3s ease-out", keyframes([
          style({ transform: "translateX({{start}}100%)", opacity: "0%"  }),
        ]))
    ])
  ])

  export const slideUpInOut = trigger("slideUpInOut", [
    transition(":enter", [
        style({transform: "translateY({{end}}100%)" }),
        animate("0.3s ease-out", keyframes([
          style({ transform: "translateY(0)" })
        ])
      )
    ]),
    transition(":leave", [
        style({ transform: "translateY(0)" }),
        animate("0.3s ease-out", keyframes([
          style({ transform: "translateY({{end}}100%)" }),
        ]))
    ])
  ])