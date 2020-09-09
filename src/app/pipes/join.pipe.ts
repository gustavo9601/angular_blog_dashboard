import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(arr: any, field: string, separator: string): any {
    if (arr) {
      // Retornara un string separado, por el parametro pasado
      // con map(arreglo, function | llave) si es funcion ejecuta en cada iteracion, y si es un valor llave, retornara los datos de la llave del objeto
      console.log('arr', arr);
      return _.map(arr, field).join(separator);
    }
    return '';
  }

}
