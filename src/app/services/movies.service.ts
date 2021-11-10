import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PeliculaDetalle, RespuestaCredits, RespuestaMDB } from '../interfaces/interfaces';

const URL = environment.url;
const apikey = environment.api_key;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularesPage=0;

  constructor(private http:HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = URL+query;
    query+=`&api_key=${apikey}&language=es&include_image_language=es`;
   
   //console.log(query);
    return this.http.get<T>(query);
  }

  getPopulares(){
    this.popularesPage++;
    const query=`/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;

    return this.ejecutarQuery<RespuestaMDB>(query);
    

  }


  getFeatures(){
    
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2021-10-22`);

  }
  getPeliculaDetalle(id:string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }
  getActoresPelicula(id:string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
 

  }

  buscarPelicula(texto:string){
    return this.ejecutarQuery(`/search/movie?query=${texto}`);

  }

}
