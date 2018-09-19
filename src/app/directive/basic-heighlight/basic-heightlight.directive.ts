import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHeighlight]'
})
export class BasicHeighlight implements OnInit {
  constructor(private elementRef: ElementRef){

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = 'red';
  }

}