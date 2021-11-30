import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../paciente/paciente.service';
import { DoencaPacienteComponent } from '../doenca-paciente/doenca-paciente.component';
import { Doenca } from '../doenca.model';
import { DoencaService } from '../doenca.service';



export interface Doencas{
  id?:Number;
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
  doencas?: Doenca[];

}


@Component({
  selector: 'app-doenca-add',
  templateUrl: './doenca-add.component.html',
  styleUrls: ['./doenca-add.component.css']
})
export class DoencaAddComponent implements AfterViewInit {

  
  arrayNovo: Doenca [] = [];

  deletDoenca: Doenca [] = [];

  pacienteNovo: Paciente = {
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
    doencas: this.arrayNovo
  };

  doencas: Doenca [] = [];

  displayedColumns: string[] = ['id', 'name'];

  dataSource = new MatTableDataSource<Doencas>(this.doencas);

  @ViewChild('paginatorDoenca') paginatorDoenca!: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private service:DoencaService,
    private pacienteService:PacienteService,
    public dialogRef: MatDialogRef<DoencaAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Paciente
    
  ) { }

  ngAfterViewInit() {
    this.findAll();
    console.log(this.data);
    this.buscaPacienteAntigo();

    
}

  buscaPacienteAntigo(){
    this.pacienteService.findById(this.data.id!).subscribe((resposta)=>{
      this.pacienteNovo = resposta
      console.log(this.pacienteNovo)
    })
  }

  findAll(): void { 
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
     this.doencas = resposta;
     this.dataSource = new MatTableDataSource<Doencas>(this.doencas);
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

  doencaSelecionada(doencaN: Doenca):void{
    console.log(doencaN);
    console.log(this.pacienteNovo);
    this.arrayNovo = this.pacienteNovo.doencas!;
    console.log(this.arrayNovo);
    this.arrayNovo.push(doencaN);
    this.pacienteNovo.doencas = this.arrayNovo;
    console.log(this.pacienteNovo)

    this.pacienteService.preencher(this.pacienteNovo).subscribe(resposta =>{
      this.pacienteService.mensagem("Doença adicionada com sucesso!")
      //console.log(resposta)
      this.cancel()
    }, err => {
      this.pacienteService.mensagem("Erro ao atualizar Item, paciente já possui doença selecionada");
      /*for (let i = 0; i < err.error.errors.length; i++){
        this.pacienteService.mensagem(err.error.errors[i].message)
      }
      console.log(this.pacienteNovo)*/
      this.buscaPacienteAntigo();
      
    });
  }

  deletarDoenca(doencaN: Doenca){
    this.buscaPacienteAntigo();
    this.deletDoenca = this.pacienteNovo.doencas!;
    const result = this.deletDoenca.findIndex(doenca => doenca.id === doencaN.id)
      console.log(result)
    if(result != -1){
      this.deletDoenca.splice(result,1);
      console.log(this.pacienteNovo);
      this.pacienteNovo.doencas = this.deletDoenca;
      this.pacienteService.preencher(this.pacienteNovo).subscribe(resposta =>{
        this.pacienteService.mensagem("Doença deletada com sucesso!")
        //console.log(resposta)
        this.cancel()
      }) 
    } else{
      this.pacienteService.mensagem("Erro ao atualizar Item, paciente Não possui doença selecionada");
      this.buscaPacienteAntigo();
    }
  }
}
