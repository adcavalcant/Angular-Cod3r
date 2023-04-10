import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-pensamento-crud',
  templateUrl: './pensamento-crud.component.html',
  styleUrls: ['./pensamento-crud.component.css'],
})
export class PensamentoCrudComponent {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Pensamentos',
      icon: 'psychology_alt',
      routeUrl: '/pensamentos',
    };
  }
}
