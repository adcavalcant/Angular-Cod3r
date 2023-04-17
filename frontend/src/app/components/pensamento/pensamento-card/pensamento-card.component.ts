import { Component, Input } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Pensamento } from 'src/app/models/pensamento.model';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css'],
})
export class PensamentoCardComponent {
  @Input() pensamento: Pensamento = {
    // o Decorator @Input diz pro angular que agora esse componente irá receber informações do componente pai 'listarPensamento'
    _id: '3dmdaism3i2n3',
    conteudo: '',
    autoria: '3S Cavalcante',
    modelo: 'modelo3',
  };
  constructor() {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
