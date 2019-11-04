import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector : '[chElemColor]'
})

export class ChangeElemColorDirective {
  constructor ( private el:ElementRef, private render:Renderer2){
      this.changeColor('blue');
  }

  changeColor(clr:string){
      this.render.setStyle(this.el.nativeElement, 'color', clr);
  }
}