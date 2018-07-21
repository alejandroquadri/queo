import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {}

  @HostListener('mouseover') onMouseOver() {
    // const part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseout') onMouseOut() {
    const part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

}
