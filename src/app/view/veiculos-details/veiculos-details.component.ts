import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Veiculo } from '../../model/veiculo';
import { VeiculosService } from '../../service/veiculos.service';

@Component({
  selector: 'app-veiculos-details',
  templateUrl: './veiculos-details.component.html',
  styleUrl: './veiculos-details.component.scss'
})
export class VeiculosDetailsComponent {

  model: Veiculo;

  constructor(private route: ActivatedRoute, private service: VeiculosService) {
    const id: Observable<string> = route.params.pipe(map((p) => p['id']));

    id.subscribe(async id => {
      this.model = await this.service.get(parseInt(id));
    });
  }

  alugar() {
    alert("Veículo alugado com sukissess");
  }

}
