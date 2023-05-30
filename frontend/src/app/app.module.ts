import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

import { RedDirective } from './directives/red.directive';

import { HttpClientModule } from '@angular/common/http';

//Config pt-BR
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//CRUD de Clientes
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

import { PensamentoCrudComponent } from './views/pensamento-crud/pensamento-crud.component';
import { PensamentoCreateComponent } from './components/pensamento/pensamento-create/pensamento-create.component';
import { PensamentoReadComponent } from './components/pensamento/pensamento-read/pensamento-read.component';
import { PensamentoUpdateComponent } from './components/pensamento/pensamento-update/pensamento-update.component';
import { PensamentoDeleteComponent } from './components/pensamento/pensamento-delete/pensamento-delete.component';
import { PensamentoCardComponent } from './components/pensamento/pensamento-card/pensamento-card.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { BotaoCarregarMaisComponent } from './components/pensamento/pensamento-read/botao-carregar-mais/botao-carregar-mais.component';
import { BotaoCarregarMaisClientesComponent } from './components/cliente/cliente-read/botao-carregar-mais-clientes/botao-carregar-mais-clientes.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    RedDirective,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    PensamentoCrudComponent,
    PensamentoCreateComponent,
    PensamentoReadComponent,
    PensamentoUpdateComponent,
    PensamentoDeleteComponent,
    PensamentoCardComponent,
    MensagemComponent,
    BotaoCarregarMaisComponent,
    BotaoCarregarMaisClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
