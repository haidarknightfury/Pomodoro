import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverable]'
})
export class HoverableDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.cursor = 'pointer';
  }
  
}
