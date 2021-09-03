import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { MedicoReadComponent } from './components/views/medico/medico-read/medico-read.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'medicos',
    component:MedicoReadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
