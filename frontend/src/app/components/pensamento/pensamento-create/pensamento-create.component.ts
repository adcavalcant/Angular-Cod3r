import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento-create',
  templateUrl: './pensamento-create.component.html',
  styleUrls: ['./pensamento-create.component.css'],
})
export class PensamentoCreateComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private pensamentoService: PensamentoService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo1'],
    });
  }

  criarPensamento() {
    console.log(this.formulario.get('autoria').errors);
    if (this.formulario.valid) {
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.pensamentoService.showMessage('Pensamento Criado!');
        this.router.navigate(['/pensamentos']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
