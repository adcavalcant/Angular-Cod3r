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
  paginaAtual: number = 1;
  haMaisClientes: boolean = true;
  filtro: string = '';

  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteService.read(this.paginaAtual, this.filtro).subscribe(
      (resposta: any) => {
        this.clientes = resposta.data;
      },
      (error: any) => {
        console.log('Erro ao carregar clientes:', error);
      }
    );
  }

  carregarMaisClientes() {
    this.clienteService.read(++this.paginaAtual, this.filtro).subscribe(
      (resposta: any) => {
        const listaClientes = resposta.data;
        if (Array.isArray(listaClientes)) {
          this.clientes.push(...listaClientes);
          if (listaClientes.length === 0) {
            this.haMaisClientes = false;
          }
        }
      },
      (error) => {
        console.log('Erro ao carregar mais clientes:', error);
      }
    );
  }

  pesquisarClientes() {
    this.haMaisClientes = true;
    this.paginaAtual = 1;
    this.clienteService
      .read(this.paginaAtual, this.filtro)
      .subscribe((listaClientes: any) => {
        this.clientes = listaClientes.data;
      });
  }
}
