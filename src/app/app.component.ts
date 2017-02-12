import {Component, Renderer} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isCollapsed: boolean = true;
  constructor(private renderer: Renderer) { }

  setHeight(el, height) {
    this.renderer.setElementStyle(el, 'height', height + 'px');
  }
}
