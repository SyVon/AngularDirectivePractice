import { Directive, OnInit, Renderer2, ElementRef, HostListener, Host, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') houseleave(eventData: Event) {
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
