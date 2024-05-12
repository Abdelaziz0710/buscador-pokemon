import { Component, Input, OnChanges, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaPokemonComponent implements OnChanges {
  constructor(private pokemonService: PokemonService) { }
  ngOnChanges(): void {
    this.extraerInformacion();
  }
  @Input() data?: Resultado;
  @Input() seleccionado:boolean=false;
  @Output() clickeado = new EventEmitter<string>();
  id: string = "0";

  extraerInformacion() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonService.getById(this.id);
    }
  }
  
}
