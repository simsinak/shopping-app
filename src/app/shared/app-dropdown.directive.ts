import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: false
})
export class AppDropdownDirective {

  private isShown = false

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  toggleDropdown() {
    this.isShown = !this.isShown
    const div = this.elementRef.nativeElement.querySelector('.dropdown-menu')
    if (this.isShown) {
      this.renderer.addClass(div, 'show')
    } else {
      this.renderer.removeClass(div, 'show')
    }
  }
}
