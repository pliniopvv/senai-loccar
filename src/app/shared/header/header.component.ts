import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(public route: ActivatedRoute) {}

}
