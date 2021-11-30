import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doenca } from '../../doenca/doenca.model';
import { Paciente } from '../paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {
  

  constructor(private service: PacienteService,private router: Router,private route: ActivatedRoute) { }

  doenca: Doenca [] =[]

  paciente: Paciente = {
    id:'',
    nome: '',
    cpf: '',
    telefone: '',
    endereco: '',
    dataNascimento: '',
    naturalidade: '',
    nomeMae: '',
    sexo: '',
    status: '',
    doenca: this.doenca
  }

  

  nome = new FormControl('', [Validators.minLength(3)])

  ngOnInit(): void {
    this.paciente.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById():void{
    this.service.findById(this.paciente.id!).subscribe((resposta)=>{
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
      this.paciente = resposta
      console.log(this.paciente)
    })
  }

  /*preencher(id: number){
    this.service.preencher(id).subscribe((resposta)=>{
      this.paciente = resposta
      console.log(this.paciente)

  }
}*/

  update():void{
    this.service.update(this.paciente).subscribe((resposta) =>{
      this.router.navigate(['pacientes'])
      this.service.mensagem('Paciente atualizado com sucesso!');
      console.log(resposta)
      console.log(this.paciente)
    }, err => {
      this.service.mensagem("Erro ao atualizar paciente. Tente mais tarde!")
      for (let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
      console.log(this.paciente)
    })
  }
    cancel():void{
      this.router.navigate(['pacientes']);
    }  
  
    getMessage(){
      if(this.nome.invalid) {
        return "O campo nome  do pacientes deve conter entre 3 e 100 caracteres";
      }
      return false;
    }
 

}
