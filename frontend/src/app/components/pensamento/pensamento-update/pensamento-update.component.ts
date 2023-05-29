import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/app/models/pensamento.model';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento-update',
  templateUrl: './pensamento-update.component.html',
  styleUrls: ['./pensamento-update.component.css'],
})
export class PensamentoUpdateComponent {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pensamentoService: PensamentoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.listarPorId(id!).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [
          pensamento.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        autoria: [
          pensamento.autoria,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito],
      });
    });
  }

  atualizarPensamento() {
    this.pensamentoService.atualizar(this.formulario.value).subscribe(() => {
      this.pensamentoService.showMessage('Pensamento Atualizado!');
      this.router.navigate(['/pensamentos']);
    });
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
