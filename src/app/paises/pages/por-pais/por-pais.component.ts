import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor : pointer;
    }
    `
  ]
})
export class PorPaisComponent  {

  constructor(private PaisesService:PaisesService) { }

  termino : string = '';
  hayerror : boolean = false;
  mostrarSugerencias : boolean = false;
  public paises : country [] = []
  public paisesSugeridos : country [] = []

  buscar( termino : string ){

    this.mostrarSugerencias = false;
    this.hayerror = false
    this.termino = termino;
    console.log(this.termino)
    this.PaisesService.buscarPais( this.termino )
    .subscribe( (paises) =>{
      this.paises = paises;
      console.log(this.paises)
    }, (err) =>{
      this.hayerror = true
      this.paises = [];
      console.log(err)
    } )
  }

  sugerencias( termino:string ) {
    this.hayerror = false
    this.termino = termino;
    
    ( termino.length>0 ) ? this.mostrarSugerencias = true : this.mostrarSugerencias = false 
    
    this.PaisesService.buscarPais( termino )
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = [] 
    
    ) 
  }



}
