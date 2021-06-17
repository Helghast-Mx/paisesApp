import { Component, OnInit } from '@angular/core';
import { country } from '../../interfaces/country.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right : 5px
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones : string [] = ["africa", "americas", "asia", "europe", "oceania"]
  regionActivada : string = '';
  continente : country [] = [];

  constructor( private paisService : PaisesService ) { }

  activarRegion ( region : string ) {

    if ( region === this.regionActivada ) { return }

    this.regionActivada = region;
    this.continente = [];


    this.paisService.getContinente(this.regionActivada)
    .subscribe( (continente) =>{
      this.continente = continente
    })

  }

  getClaseCSS( region:string ) {
    return ( region === this.regionActivada ) ? 'btn btn-primary animate__bounceIn' : 'btn btn-outline-primary';
  }

  ngOnInit(): void {
  }

}
