import { Component, OnInit } from '@angular/core';

import { PaisesService } from '../../services/paises.service';
import { country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor(private capitalServices: PaisesService ) { }

  termino : string = '';
  hayerror : boolean = false;
  mostrarSugerencias : boolean = false
  public paisesSugeridos : country [] = []
  public capital : country [] = []

  buscar( termino: string ) {
    this.hayerror = false
    this.termino = termino;
    console.log(this.termino)
    this.capitalServices.buscarCapital( this.termino )
    .subscribe( (capitales) =>{
      this.capital = capitales;
      console.log(this.capital)
    }, (err) =>{
      this.hayerror = true
      this.capital = [];
      console.log(err)
    } )
  }

  sugerencias( termino:string ) {
    this.hayerror = false
    this.termino = termino;
    
    ( termino.length>0 ) ? this.mostrarSugerencias = true : this.mostrarSugerencias = false 
    
    this.capitalServices.buscarCapital ( termino )
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = [] 
    
    ) 
  }

  ngOnInit(): void {
  }

}
