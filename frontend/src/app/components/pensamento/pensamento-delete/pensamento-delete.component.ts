import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/models/pensamento.model';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento-delete',
  templateUrl: './pensamento-delete.component.html',
  styleUrls: ['./pensamento-delete.component.css'],
})
export class PensamentoDeleteComponent {
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

  excluirPensamento(): void {
    this.service.excluir(this.pensamento._id).subscribe(() => {
      this.pensamentoService.showMessage('Pensamento Excluído!');
      this.router.navigate(['/pensamentos']);
    });
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
