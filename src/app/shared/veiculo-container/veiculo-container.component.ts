import { Component, Input } from '@angular/core';
import { Veiculo } from '../../model/veiculo';

@Component({
  selector: 'app-veiculo-container',
  templateUrl: './veiculo-container.component.html',
  styleUrl: './veiculo-container.component.scss'
})
export class VeiculoContainerComponent {
  @Input() list: Veiculo[];
}
