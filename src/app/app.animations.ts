import { animate, style, transition, trigger } from '@angular/animations';

export const animations = [
  trigger('counterChange', [
    transition(':increment', [
      animate('100ms', style({
        background: 'green',
        transform: 'scale(1.3, 1.2)',
      })),
      animate('100ms', style({
        background: 'green',
        transform: 'scale(1.2, 1.2)',
      })),
      animate('300ms'),
    ]),

    transition(':decrement', [
      animate('100ms', style({
        background: 'red',
        transform: 'scale(0.8, 0.9)',
      })),
      animate('100ms', style({
        background: 'red',
        transform: 'scale(0.9, 0.9)',
      })),
      animate('300ms'),
    ]),
  ])
];
