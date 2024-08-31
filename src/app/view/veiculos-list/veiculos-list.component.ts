import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../../service/veiculos.service';
import { Veiculo } from '../../model/veiculo';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrl: './veiculos-list.component.scss'
})
export class VeiculosListComponent implements OnInit {

  veiculos: Veiculo[] = [];

  constructor(private service: VeiculosService) {}

  async ngOnInit(): Promise<void> {
    const list = await this.service.list();
    this.veiculos = list;
  }

}
