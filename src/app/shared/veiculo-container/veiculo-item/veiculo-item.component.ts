import { Component, Input } from '@angular/core';
import { Veiculo } from '../../../model/veiculo';
import { FavoritosService } from '../../../service/favoritos.service';

@Component({
  selector: 'app-veiculo-item',
  templateUrl: './veiculo-item.component.html',
  styleUrl: './veiculo-item.component.scss'
})
export class VeiculoItemComponent {
  @Input() model: Veiculo;

  constructor(private fav: FavoritosService) {

  }

  isFav() {
    return this.fav.has(this.model.id);
  }
}
