import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../paciente/paciente.model';
import { Doenca } from './doenca.model';

@Injectable({
  providedIn: 'root'
})
export class DoencaService {

  baseUrl: String = environment.baseUrl;

  baseUrl2: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }


  findAll():Observable<Doenca[]> {
    const url = `${this.baseUrl2}/doencas`
    return this.http.get<Doenca[]>(url)
    }

    findById(id: String):Observable<Doenca>{
      const url = `${this.baseUrl}/doencas/${id}`
      return this.http.get<Doenca>(url)
     } 

     findByAllPaciente(id_pac: String):Observable<Doenca[]>{
      const url = `${this.baseUrl}doencas/dp?paciente=${id_pac}`
      return this.http.get<Doenca[]>(url)
     }

}
