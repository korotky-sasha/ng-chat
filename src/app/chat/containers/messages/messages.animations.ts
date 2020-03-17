import { animate, style, transition, trigger } from '@angular/animations';

export const animations = [
  trigger('newMessage', [
    transition('* => true', [
      style({
        marginLeft: '-100%',
        opacity: '0.5'
      }),
      animate('300ms', style({
        marginLeft: '0'
      }))
    ]),
  ])
];
