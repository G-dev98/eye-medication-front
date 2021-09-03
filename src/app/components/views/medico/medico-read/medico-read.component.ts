import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicos } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})
export class MedicoReadComponent implements OnInit {

  medicos: Medicos[] = []

  displayedColumns: string[] = ['id', 'nome', 'crm', 'acoes'];

  constructor(private service: MedicoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() { 
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
     this.medicos = resposta; 
    });
  }

  navegarParaMedicoCreate(){
    this.router.navigate(["medicos/create"])
  }
}
