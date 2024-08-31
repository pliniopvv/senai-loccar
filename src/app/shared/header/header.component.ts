import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritosService } from '../../service/favoritos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  links = [
    { title: 'Lista', path: 'list' },
    // { title: 'Detalhes', path: 'details' },
  ];

  constructor(
    private route: ActivatedRoute,
    private favService: FavoritosService
  ) {}

  countFav() {
    return this.favService.list().length;
  }

}
