import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl = 'http://localhost:3001/clientes';
  baseUrlLaravel = 'http://localhost:8000/api/clientes';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrlLaravel, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrlLaravel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Cliente> {
    const url = `${this.baseUrlLaravel}/${id}`;
    return this.http.get<Cliente>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrlLaravel}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.baseUrlLaravel}/${id}`;
    return this.http.delete<Cliente>(url).pipe(
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
