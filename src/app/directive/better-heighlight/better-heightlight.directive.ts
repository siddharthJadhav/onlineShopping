import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHeightlight]'
})
export class BetterHeightlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    console.log('mouseenter eventData : ', eventData);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseLeave(eventDate: Event){
    console.log('mouseleave Event data: ', eventDate);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }



}
