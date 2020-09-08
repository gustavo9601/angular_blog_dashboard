import {AfterViewChecked, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective implements OnChanges, AfterViewChecked {

  @Input('search') wordSearch: string;
  private viewRendered: boolean;

  /*
  * ElementRef  permite acceder al elemento en si
  * */
  constructor(private element: ElementRef) {
    this.viewRendered = false;
  }

  public higlihtSearchTerm() {
    if (!this.wordSearch || this.wordSearch.length < 3) {

      if (this.viewRendered) {
        // Eliminar marcas
        this.removeMark();
      }
    } else {

      // Validando si el emento en si exsite
      if (this.element.nativeElement) {
        // Limipar marcas
        this.removeMark();
        // Buscar
        this.putMark();
      }
    }
  }

  // Generar la marca
  private putMark() {
    const searchRegex = new RegExp(this.wordSearch, 'gmi');
    this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.replace(searchRegex, match => {
      // Por cada concidencia lo que va a hacer, es poner las etiquetas al incio y al fin del html
      return '<mark>' + match + '</mark>';
    });
  }

  // Remover la marca
  private removeMark() {
    this.element.nativeElement.querySelectorAll('*').forEach(element => {
      // Expresion regultar para busar <mark> o </mark> , g => global , i => no interfiere mayusculas o minusculas
      const regex = new RegExp('<mark>|</mark>', 'gi');
      // Reemplazara todas las coincidencias de la expresion regular por valores vacios
      const cleanText = element.parentNode.innerHTML.replace(regex, '');
      // Reemplaza el html que contenga el elemento, por el cleanText sanititzado sin los mark
      element.parentNode.innerHTML = cleanText;
    });

  }

  ngAfterViewChecked(): void {
    this.viewRendered = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    // ['wordSearch'] =>  es el input del valor que se pasa al llamar la directiva
    if (changes['wordSearch']) {
      // si se dispara el evento de cambio sobre el elemento , ejecutara la funcion
      this.higlihtSearchTerm();
    }
  }


}
