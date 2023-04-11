import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/services/pensamento.service';
import { Pensamento } from 'src/app/models/pensamento.model';

@Component({
  selector: 'app-pensamento-read',
  templateUrl: './pensamento-read.component.html',
  styleUrls: ['./pensamento-read.component.css'],
})
export class PensamentoReadComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  username = 'fulano';

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log('deslogou');
  }
}
