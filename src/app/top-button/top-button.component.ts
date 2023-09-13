import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.less']
})
export class TopButtonComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
