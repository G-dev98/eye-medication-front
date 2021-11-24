import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoencaPacienteComponent } from './components/views/doenca/doenca-paciente/doenca-paciente.component';
import { HomeComponent } from './components/views/home/home.component';
import { MedicoCreateComponent } from './components/views/medico/medico-create/medico-create.component';
import { MedicoDeleteComponent } from './components/views/medico/medico-delete/medico-delete.component';
import { MedicoReadComponent } from './components/views/medico/medico-read/medico-read.component';
import { MedicoUpdateComponent } from './components/views/medico/medico-update/medico-update.component';
import { MedicoService } from './components/views/medico/medico.service';
import { PacienteCreateComponent } from './components/views/paciente/paciente-create/paciente-create.component';
import { PacienteReadComponent } from './components/views/paciente/paciente-read/paciente-read.component';
import { PacienteUpdateComponent } from './components/views/paciente/paciente-update/paciente-update.component';
import { PacienteService } from './components/views/paciente/paciente.service';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'medicos',
    component:MedicoReadComponent
  },
  {
    path: 'medicos/create',
    component:MedicoCreateComponent
  },
  {
    path:'medicos/delete/:id',
    component:MedicoDeleteComponent
  },
  {
    path:'medicos/update/:id',
    component:MedicoUpdateComponent
  },

  {
    path:'pacientes',
    component:PacienteReadComponent
  },
  {
    path: 'pacientes/create',
    component:PacienteCreateComponent
  },
  {
    path: 'pacientes/update/:id',
    component:PacienteUpdateComponent
  },
  {
    path: 'pacientes/:id_pac/doenca',
    component:DoencaPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
