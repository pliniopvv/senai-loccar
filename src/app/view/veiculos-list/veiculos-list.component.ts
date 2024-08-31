import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../../service/veiculos.service';
import { Veiculo } from '../../model/veiculo';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrl: './veiculos-list.component.scss'
})
export class VeiculosListComponent implements OnInit {

  name: string = "";
  veiculos: Veiculo[] = [];
  cache: Veiculo[] = [];

  constructor(private service: VeiculosService) { }

  async ngOnInit(): Promise<void> {
    const list = await this.service.list();
    this.cache = list;
    this.veiculos = [...list];
  }

  filter() {
    const list = this.cache.filter(x => x.name.indexOf(this.name) != -1);
    if (list)
      this.veiculos = [...list];
    else
      this.veiculos = [...this.cache];
  }

}
