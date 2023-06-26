import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tech-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({ opacity: 1, transform: 'scale(1, 1)' })),
      state('closed', style({ opacity: 0, transform: 'scale(0.95, 0.95)' })),
      transition('open => closed', [animate('100ms ease-in')]),
      transition('closed => open', [animate('200ms ease-out')]),
    ]),
  ],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMobileMenu: boolean = false;
  showFlyoutMenu: boolean = false;
  isShowing: boolean = false;

  theme: string = 'light';

  openMenu: boolean = false;
  openThemeMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
