import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicos } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

  medico: Medicos = {

    nome:'',
    cpf:'',
    telefone:'',
    endereco:'',
    dataNascimento:'',
    naturalidade:'',
    nomeMae:'',
    sexo:'',
    crm:'',

  }

  constructor(private service: MedicoService,private  router : Router) { }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.medico).subscribe((resposta) => {
      this.router.navigate(['/medicos']);
      this.service.mensagem('Medico criado com sucesso!!');

    }, err =>{
      for(let i = 0; i < err.error.erros.length; i++){
        this.service.mensagem(err.error.erros[i].message)
      }
    })
  }

  cancel():void{
    this.router.navigate(['medicos']);
  }

}
