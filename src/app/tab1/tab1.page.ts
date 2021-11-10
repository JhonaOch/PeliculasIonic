import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[]=[];
  populares: Pelicula[]=[];
  

  // slidesOpts={
  //   slidesPerView: 1.2,
  //   freeMode:true
  // };

  constructor(private moviesService: MoviesService,) {}


  ngOnInit() {
    this.moviesService.getFeatures().
    subscribe((resp)=>{
      console.log('Resp',resp);
      //this.peliculasRecientes=this.results;
      this.peliculasRecientes=resp.results;
      
    });

    this.getPopulares();

  }

    cargarMas(){
      this.getPopulares();

    }

    getPopulares(){
      this.moviesService.getPopulares()
    .subscribe(resp => {
      //console.log('Populares',resp);
      const arrTemp =[...this.populares,...resp.results];
      this.populares=arrTemp;
      

    })

    }


}

