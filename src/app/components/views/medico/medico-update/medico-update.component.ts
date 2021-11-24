import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Medicos } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css']
})
export class MedicoUpdateComponent implements OnInit {
  
  
  constructor(private service: MedicoService,private router: Router,private route: ActivatedRoute) { }
  
  medico: Medicos = {

    id:'',
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

  
  nome = new FormControl('', [Validators.minLength(3)])
  

  ngOnInit(): void {
    this.medico.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById():void{
    this.service.findById(this.medico.id!).subscribe((resposta)=>{
      /*this.medico.id = resposta.id
      this.medico.nome = resposta.nome
      this.medico.cpf = resposta.cpf
      this.medico .telefone = resposta.telefone
      this.medico.endereco = resposta.endereco
      this.medico.dataNascimento = resposta.dataNascimento
      this.medico.naturalidade = resposta.naturalidade
      this.medico.nomeMae = resposta.nomeMae
      this.medico.sexo = resposta.sexo
      this.medico.crm =resposta.crm*/
      this.medico = resposta
      console.log(this.medico)
    })
  }

  update():void{
    this.service.update(this.medico).subscribe((resposta) =>{
      this.router.navigate(['medicos'])
      this.service.mensagem('Medico atualizado com sucesso!');
      console.log(resposta)
      console.log(this.medico)
    }, err => {
      this.service.mensagem("Erro ao atualizar medico. Tente mais tarde!")
      for (let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
      console.log(this.medico)
    })
  }
  
  cancel():void{
    this.router.navigate(['medicos']);
  }  

  getMessage(){
    if(this.nome.invalid) {
      return "O campo nome  do medico deve conter entre 3 e 100 caracteres";
    }
    return false;
  }
}
