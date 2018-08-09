import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { 
    console.log(this._elementRef);
    
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    //EVITAR USAR O ELEMENTREF POR MOTIVOS DE SEGURANÇA

    this._renderer.setElementStyle(
      this._elementRef.nativeElement, 
      'background-color',
      'yellow'
      );


  }

}
