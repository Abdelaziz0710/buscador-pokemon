import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoPokemonComponent {
  @Input() pokemon?:Pokemon;
}
