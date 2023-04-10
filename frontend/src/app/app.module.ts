import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';

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

//CRUD de Produtos
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

//CRUD de Clientes
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

import { PensamentoCrudComponent } from './views/pensamento-crud/pensamento-crud.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    HomeComponent,
    NavComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    PensamentoCrudComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
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
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
