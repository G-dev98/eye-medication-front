import { Doenca } from "../doenca/doenca.model";

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
  doenca?:Doenca[];
}