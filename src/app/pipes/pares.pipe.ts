import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  transform( arr: any[] ): any[] {
    console.log("ddd",arr);

    const pares = arr.reduce( (result, value, index, array) => {

      if ( index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      //console.log("aLOO2",result);
      return result;
    }, []);

    //console.log("aLOO",pares);


    return pares;
 }

}
