import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  paciente: Paciente = {
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    dataNascimento: '',
    naturalidade: '',
    nomeMae: '',
    sexo: '',
    status: '',

  }
  

  constructor(private service: PacienteService,private  router : Router) { }

  

  ngOnInit(): void {
  }


  create():void{
    this.service.create(this.paciente).subscribe((resposta) => {
      this.router.navigate(['/pacientes']);
      this.service.mensagem('Paciente criado com sucesso!!');

    }, err =>{
      for(let i = 0; i < err.error.erros.length; i++){
        this.service.mensagem(err.error.erros[i].message)
      }
    })
  }

  cancel():void{
    this.router.navigate(['pacientes']);
  }
  
 

}
