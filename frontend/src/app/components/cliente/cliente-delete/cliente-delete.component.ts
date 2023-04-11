import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
})
export class ClienteDeleteComponent {
  cliente: Cliente;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(+id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  deleteClient(): void {
    this.clienteService.delete(this.cliente.id).subscribe(() => {
      this.clienteService.showMessage(
        `Produto '${this.cliente.name}' excluído com sucesso!`
      );
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
