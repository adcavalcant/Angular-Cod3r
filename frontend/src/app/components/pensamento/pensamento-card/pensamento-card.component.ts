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
    // o Decorator @Input diz pro angular que agora esse componente irá receber informações do componente pai 'pensamento-read'
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
    created_at: '',
    updated_at: '',
  };
  constructor() {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }
}
