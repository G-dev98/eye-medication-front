import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicos } from './medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

 baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar ) { }

  findAll():Observable<Medicos[]> {
    const url = `${this.baseUrl}/medicos`
    return this.http.get<Medicos[]>(url)
    }

  create(medico: Medicos):Observable<Medicos>{
    const url = `${this.baseUrl}/medicos`
    return this.http.post<Medicos>( url, medico);
  }

  mensagem(str: String):void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
