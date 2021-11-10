import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


const URL = environment.imgPath;

//https://image.tmdb.org/t/p/w500/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img:string,size:string='w500'): string {
    
    if(!img){
      return './assets/142 no-image-banner.jpg'
    }

    const imgUrl=`${URL}/${size}/${img}`;
    
    //console.log('IMgen URL',imgUrl);
    
    
    return imgUrl;
  }

}
