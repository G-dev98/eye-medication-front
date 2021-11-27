import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
//import { Doenca, Paciente } from '../doenca-paciente/doenca-paciente.component';
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
  selector: 'app-doenca-add',
  templateUrl: './doenca-add.component.html',
  styleUrls: ['./doenca-add.component.css']
})
export class DoencaAddComponent implements AfterViewInit {

  doencas: Doenca [] = [];

  displayedColumns: string[] = ['id', 'name', 'descricao'];

  dataSource = new MatTableDataSource<Doencas>(this.doencas);

  @ViewChild('paginatorDoenca') paginatorDoenca!: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;



  constructor(
    public dialogRef: MatDialogRef<DoencaAddComponent>,
    private route: ActivatedRoute, 
    private router: Router,
    private service:DoencaService,

  ) { }



  ngAfterViewInit() {
    this.findAll();
    
  }



  findAll() { 
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
     this.doencas = resposta;
     this.dataSource = new MatTableDataSource<Doenca>(this.doencas);
     this.dataSource.paginator = this.paginatorDoenca!
     this.dataSource.sort = this.sort!
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
 
  applyFilter(event: Event) {
    console.log(this.dataSource)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
