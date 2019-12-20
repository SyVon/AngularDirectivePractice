import { Directive, ElementRef, HostListener, Host} from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {

    } 

    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor='green';
        
    }
}