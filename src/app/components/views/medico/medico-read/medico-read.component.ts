import { Component, OnInit } from '@angular/core';
import { Medicos } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})
export class MedicoReadComponent implements OnInit {

  medicos: Medicos[] = []

  displayedColumns: string[] = ['id', 'nome', 'crm',"medicos", 'acoes'];

  constructor(private service: MedicoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() { 
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
     this.medicos = resposta; 
    })
  }
}
