import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css'],
})
export class ClienteCrudComponent {
  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'person',
      routeUrl: '/clientes',
    };
  }

  navigateToClientCreate() {
    this.router.navigate(['/clientes/create']);
  }
}
