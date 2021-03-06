import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePageEvent, _MatTableDataSource } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicos } from '../medico.model';
import { MedicoService } from '../medico.service';


export interface UserData{
  id?:String;
  nome:String;
  cpf:String;
  telefone:String;
  endereco:String;
  dataNascimento:String;
  naturalidade:String;
  nomeMae:String;
  sexo:String;
  crm:String;
}


@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})

export class MedicoReadComponent implements OnInit{


  constructor(
    private service:MedicoService, 
    private route: ActivatedRoute, 
    private router: Router, ) { 
  } 
  
  medicos: Medicos[] = [];


  dataSource  = new MatTableDataSource(this.medicos);

  displayedColumns: string[] = ['id', 'nome', 'crm', 'acoes'];


  

  ngOnInit(): void {
    this.findAll();
  }

  findAll() { 
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
     this.medicos = resposta;
     this.dataSource = new MatTableDataSource(this.medicos);
    });
  }

 

  navegarParaMedicoCreate(){
    this.router.navigate(["medicos/create"])
  }

  applyFilter(event: Event) {
    console.log(this.dataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}





