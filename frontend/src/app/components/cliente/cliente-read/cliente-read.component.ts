import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css'],
})
export class ClienteReadComponent {
  clientes: Cliente[] = [];
  displayedColumns = ['id', 'name', 'surname', 'salario', 'action'];

  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteService.read().subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
