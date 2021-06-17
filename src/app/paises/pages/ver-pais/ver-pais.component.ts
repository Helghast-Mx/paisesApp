import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { switchMap, tap } from "rxjs/operators";
import { country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : country;

  constructor( 
    private activatedRout : ActivatedRoute,
    private paisService : PaisesService ) { }

  ngOnInit(): void {

    this.activatedRout.params
    .pipe(
      switchMap( ( params ) => this.paisService.getPaisPorAlpha( params.id ) ), 
      // switchMap( ( {id} ) => this.paisService.getPaisPorAlpha( id ) )
      tap(console.log)
      // tap( resp => console.log(resp) )
    )
    .subscribe( pais => this.pais = pais )
    
    // this.activatedRout.params
    // .subscribe( ({id}) =>{
    //   console.log(id)

    //   this.paisService.getPaisPorAlpha( id )
    //   .subscribe( pais => {
    //     console.log(pais)
    //   } )
    
    // } )
  }

}
