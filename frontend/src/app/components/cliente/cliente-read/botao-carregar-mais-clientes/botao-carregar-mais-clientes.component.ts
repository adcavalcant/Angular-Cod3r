import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais-clientes',
  templateUrl: './botao-carregar-mais-clientes.component.html',
  styleUrls: ['./botao-carregar-mais-clientes.component.css'],
})
export class BotaoCarregarMaisClientesComponent implements OnInit {
  @Input()
  haMaisClientes: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
