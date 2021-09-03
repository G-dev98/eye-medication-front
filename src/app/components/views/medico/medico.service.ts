import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicos } from './medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

 baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Medicos[]> {
    const url = `${this.baseUrl}/medicos`
    return this.http.get<Medicos[]>(url)
    }
}
