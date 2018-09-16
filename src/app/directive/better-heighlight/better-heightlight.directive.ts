import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHeightlight]'
})
export class BetterHeightlightDirective implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() defaultColor: string;
  @Input() heighLightColor: string;
  // using this you can bind any property on that dom
  @HostBinding('style.backgroundColor') backroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    console.log('mouseenter eventData : ', eventData);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backroundColor = this.heighLightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventDate: Event) {
    console.log('mouseleave Event data: ', eventDate);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backroundColor = this.defaultColor;
  }



}
