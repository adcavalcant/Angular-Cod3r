import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

import { PensamentoCrudComponent } from './views/pensamento-crud/pensamento-crud.component';
import { PensamentoCreateComponent } from './components/pensamento/pensamento-create/pensamento-create.component';
import { PensamentoUpdateComponent } from './components/pensamento/pensamento-update/pensamento-update.component';
import { PensamentoDeleteComponent } from './components/pensamento/pensamento-delete/pensamento-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductCrudComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent },
  { path: 'products/delete/:id', component: ProductDeleteComponent },
  { path: 'clientes', component: ClienteCrudComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:id', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
  { path: 'pensamentos', component: PensamentoCrudComponent },
  { path: 'pensamentos/create', component: PensamentoCreateComponent },
  { path: 'pensamentos/update/:id', component: PensamentoUpdateComponent },
  { path: 'pensamentos/delete/:id', component: PensamentoDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
