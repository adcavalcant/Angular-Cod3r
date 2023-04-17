import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Pensamento } from '../models/pensamento.model';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  baseUrl = 'http://localhost:3000/pensamentos';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.baseUrl, pensamento);
  }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.baseUrl);
  }

  listarPorId(id: string): Observable<Pensamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  atualizar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.baseUrl}/${pensamento._id}`;
    return this.http.put<Pensamento>(url, pensamento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Pensamento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
