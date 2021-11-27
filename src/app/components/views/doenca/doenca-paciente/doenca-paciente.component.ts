import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../paciente/paciente.service';
import { DoencaAddComponent } from '../doenca-add/doenca-add.component';


import { Doenca } from '../doenca.model';

import { DoencaService } from '../doenca.service';


export interface Doencas{
  id?:String;
  nome:String;
  descricao: String;
  paciente?: Paciente;
}

export interface Paciente{
  id?:String;
  nome:String;
  cpf:String;
  telefone:String;
  endereco:String;
  dataNascimento:String;
  naturalidade:String;
  nomeMae:String;
  sexo:String;
  status:String;
  doenca?: Doenca [];

}

@Component({
  selector: 'app-doenca-paciente',
  templateUrl: './doenca-paciente.component.html',
  styleUrls: ['./doenca-paciente.component.css']
})


export class DoencaPacienteComponent implements AfterViewInit {
  
  id_pac: String ='';

  doencas: Doenca [] = [];
  pacDoencas: Doenca [] = [];
  
  displayedColumns: string[] = ['id', 'name', 'descricao'];

  dataSource = new MatTableDataSource<Doencas>(this.doencas);
  dataSourcePaciente = new MatTableDataSource<Doencas>(this.pacDoencas);

  @ViewChild('paginatorDoenca') paginatorDoenca!: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  @ViewChild('paginatorPaciente') paginatorPaciente!: MatPaginator;
  @ViewChild(MatSort) sort2?: MatSort;

  constructor(
    private service:DoencaService, 
    private servicePaciente:PacienteService,
    private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog,
    ) { 
  } 

  

  ngAfterViewInit() {
    this.id_pac = this.route.snapshot.paramMap.get('id_pac')!
    this.findByAllPaciente();  
  }

  addDoenca(): void {
    const dialogRef = this.dialog.open(DoencaAddComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  findByAllPaciente():void{
    this.service.findByAllPaciente(this.id_pac).subscribe((resposta)=>{
      console.log(this.pacDoencas);
      this.pacDoencas = resposta;
      this.dataSourcePaciente = new MatTableDataSource<Doencas>(this.pacDoencas);
      this.dataSourcePaciente.paginator = this.paginatorPaciente!
      this.dataSourcePaciente.sort = this.sort2!
    });
   }

  applyFilter(event: Event) {
    console.log(this.dataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterPaciente(event: Event) {
    console.log(this.dataSourcePaciente)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePaciente.filter = filterValue.trim().toLowerCase();
  }
}





