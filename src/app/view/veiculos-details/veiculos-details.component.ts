import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Veiculo } from '../../model/veiculo';
import { VeiculosService } from '../../service/veiculos.service';
import { FavoritosService } from '../../service/favoritos.service';

@Component({
  selector: 'app-veiculos-details',
  templateUrl: './veiculos-details.component.html',
  styleUrl: './veiculos-details.component.scss'
})
export class VeiculosDetailsComponent implements OnInit {

  model: Veiculo;

  constructor(
    private route: ActivatedRoute,
    private service: VeiculosService,
    private favService: FavoritosService
  ) {
  }

  ngOnInit(): void {
    const id: Observable<string> = this.route.params.pipe(map((p) => p['id']));

    id.subscribe(async id => {
      this.model = await this.service.get(parseInt(id));
    });
  }

  alugar() {
    alert("Veículo alugado com sukissess");
  }

  isFavorited() {
    if (!this.model) return null;
    const state = this.favService.has(this.model.id);
    return {
      'btn-success': !state,
      'btn-danger': state
    }
  }

  toggleFav() {
    const state = this.favService.has(this.model.id);
    if (state) {
      this.favService.remove(this.model);
    } else {
      this.favService.add(this.model);
    }
  }

}
