import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { Pensamento } from 'src/app/models/pensamento.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pensamento-read',
  templateUrl: './pensamento-read.component.html',
  styleUrls: ['./pensamento-read.component.css'],
})
export class PensamentoReadComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(
        (listaPensamentos: any) => {
          this.listaPensamentos = listaPensamentos.data;
        },
        (error: any) => {
          console.log('Erro ao carregar pensamentos:', error);
        }
      );
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(
        (resposta: any) => {
          const listaPensamentos = resposta.data;
          if (Array.isArray(listaPensamentos)) {
            this.listaPensamentos.push(...listaPensamentos);
            if (listaPensamentos.length === 0) {
              this.haMaisPensamentos = false;
            }
          }
        },
        (error) => {
          console.log('Erro ao carregar mais pensamentos:', error);
        }
      );
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos: any) => {
        this.listaPensamentos = listaPensamentos.data;
      });
  }

  listarFavoritos() {
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentosFavoritos: any) => {
        this.listaPensamentos = listaPensamentosFavoritos.data;
        this.listaFavoritos = listaPensamentosFavoritos.data;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
