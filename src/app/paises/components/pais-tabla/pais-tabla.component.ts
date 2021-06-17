import { Component, Input } from '@angular/core';
import { country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent  {

  constructor() { }

  @Input () paises : country [] = [];

  

}
