
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
  standalone: true
})
export class HoverCardDirective implements OnInit{

  @Input() bgColor: string= 'red' ;

  

  constructor(private el: ElementRef) {
    //boxShadow;
    el.nativeElement.style.boxShadow= "0 4px 8px 10px rgba(0,0,0,0.4)";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transition = 'box-shadow 0.3s';
   this.el.nativeElement.style.boxShadow= "0 8px 16px  10px rgba(0,0,0,0.8)";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow= "0 4px 8px 10px rgba(0,0,0,0.1)";
  }

  ngOnInit() {
    this.el.nativeElement.style.borderRadius = '10px';
    //this.el.nativeElement.style.padding = '20px';
    this.el.nativeElement.style.margin = '10px';
    if (this.bgColor) {
      this.el.nativeElement.style.backgroundColor = this.bgColor;
    }
  }


}


