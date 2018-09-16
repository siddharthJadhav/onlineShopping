import { Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') openToggler() {
    this.isOpen = !this.isOpen;
  }

}
