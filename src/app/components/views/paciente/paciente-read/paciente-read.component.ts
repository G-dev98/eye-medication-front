
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePageEvent, _MatTableDataSource } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DoencaAddComponent } from '../../doenca/doenca-add/doenca-add.component';

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
  status:String;

}

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})

export class PacienteReadComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nome', 'cpf','addDoenca','doenca', 'acoes'];

  constructor(
    private service:PacienteService,
    private rout: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    //@Inject(MAT_DIALOG_DATA) public data: Paciente
  ) {

   }

   pacientes: Paciente[] = [];

   dataSource = new MatTableDataSource(this.pacientes);

  

  ngOnInit(): void {
    this.findAll();
  }

  findAll() { 
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
     this.pacientes = resposta;
     this.dataSource = new MatTableDataSource(this.pacientes);
    });
  }

  navegarParaPacienteCreate(){
    this.router.navigate(["pacientes/create"])
  }

  applyFilter(event: Event) {
    console.log(this.dataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addDoenca(paciente: UserData): void {
    const dialogRef = this.dialog.open(DoencaAddComponent, {
      //width: '700px',
      data: paciente
      
     
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
    });
  }
  //(click)="addDoenca(row)"

  deletarDoenca(paciente: UserData): void {
    const dialogRef = this.dialog.open(DoencaAddComponent, {
      //width: '700px',
      data: paciente
      
     
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
    });
  }


}
