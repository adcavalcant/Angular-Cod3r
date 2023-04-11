import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/models/pensamento.model';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento-update',
  templateUrl: './pensamento-update.component.html',
  styleUrls: ['./pensamento-update.component.css'],
})
export class PensamentoUpdateComponent {
  pensamento: Pensamento;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private pensamentoService: PensamentoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.listarPorId(id).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  atualizarPensamento() {
    this.service.atualizar(this.pensamento).subscribe(() => {
      this.pensamentoService.showMessage('Pensamento Atualizado!');
      this.router.navigate(['/pensamentos']);
    });
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
