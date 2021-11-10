import { Component, Input, OnInit } from '@angular/core';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula:PeliculaDetalle={};
  oculto=150;
  actores:Cast[]=[];

  slidesOptActores={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween:-5

  }

  constructor(private moviesService: MoviesService,private modalCtrl:ModalController) { }

  ngOnInit() {
    console.log(this.id);

    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe(res=>{
      this.pelicula = res;
      console.log(res);
    });


    this.moviesService.getActoresPelicula(this.id)
    .subscribe(res=>{
      console.log(res);
      this.actores=res.cast;
    });

   
  }

  regresar(){
    this.modalCtrl.dismiss();
  }


}
