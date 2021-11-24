import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicos } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css']
})
export class MedicoDeleteComponent implements OnInit {

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

  constructor(private service: MedicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.medico.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById():void{
    this.service.findById(this.medico.id!).subscribe((resposta)=>{
      this.medico.id = resposta.id
      this.medico.nome = resposta.nome
      this.medico.cpf = resposta.cpf
      this.medico .telefone = resposta.telefone
      this.medico.endereco = resposta.endereco
      this.medico.dataNascimento = resposta.dataNascimento
      this.medico.naturalidade = resposta.naturalidade
      this.medico.nomeMae = resposta.nomeMae
      this.medico.sexo = resposta.sexo
      this.medico.crm =resposta.crm
      console.log(this.medico)
    })
  }

  delete():void{
     this.service.delete(this.medico.id!).subscribe((resposta =>{
      this.router.navigate(['medicos'])
      this.service.mensagem('Medico deletado com sucesso!')
     }))
  }

  cancel():void{
    this.router.navigate(['medicos']);
  }

}
