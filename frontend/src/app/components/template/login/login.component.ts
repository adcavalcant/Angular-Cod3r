import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  private readonly API = 'http://localhost:3001';

  usuario = {
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  logar() {
    if (!this.usuario.email) {
      alert('E-mail é obrigatório');
    }
    if (!this.usuario.email) {
      alert('Senha é obrigatório');
    }
    if (this.usuario.email && this.usuario.password) {
      alert('Logou');
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
