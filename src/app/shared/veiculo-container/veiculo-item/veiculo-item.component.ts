import { Component, Input } from '@angular/core';
import { Veiculo } from '../../../model/veiculo';

@Component({
  selector: 'app-veiculo-item',
  templateUrl: './veiculo-item.component.html',
  styleUrl: './veiculo-item.component.scss'
})
export class VeiculoItemComponent {
  @Input() model: Veiculo;
}
