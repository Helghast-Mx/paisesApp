import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl : string = 'https://restcountries.eu/rest/v2'

  get httParams () {
    return new HttpParams().set( 'fields' , 'name;capital;currencies;population;alpha2Code;flag' )
  }

  constructor( private http:HttpClient ) { }

  buscarPais ( termino:string ): Observable <country[]> {
   const url = `${ this.apiUrl }/name/${ termino }` 
   return this.http.get<country[]>( url, {params : this.httParams} )
  }

  buscarCapital ( termino:string ) : Observable <country[]> { 
    const url = `${ this.apiUrl }/capital/${ termino }`
    return this.http.get<country[]>( url, {params : this.httParams} )
  }

  getPaisPorAlpha ( id:string ) : Observable <country> { 
    const url = `${ this.apiUrl }/alpha/${ id }`
    return this.http.get<country>( url )
  }

  getContinente ( continente:string ) : Observable <country[]> { 
    const url = `${ this.apiUrl }/region/${ continente }`
    return this.http.get<country[]>( url, {params : this.httParams} )
  }
  
}
