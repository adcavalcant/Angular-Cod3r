import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  constructor(private router: Router) {}
  cadastrar() {
    alert('Cadastro realizado com sucesso!');
  }
  voltar() {
    this.router.navigate(['/login']);
  }
}
