import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { MedicoReadComponent } from './components/views/medico/medico-read/medico-read.component';
import { MedicoCreateComponent } from './components/views/medico/medico-create/medico-create.component';
import { MedicoDeleteComponent } from './components/views/medico/medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './components/views/medico/medico-update/medico-update.component';
import { PacienteReadComponent } from './components/views/paciente/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './components/views/paciente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './components/views/paciente/paciente-update/paciente-update.component';
import { DoencaPacienteComponent } from './components/views/doenca/doenca-paciente/doenca-paciente.component';
import { DoencaAddComponent } from './components/views/doenca/doenca-add/doenca-add.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    MedicoReadComponent,
    MedicoCreateComponent,
    MedicoDeleteComponent,
    MedicoUpdateComponent,
    PacienteReadComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent,
    DoencaPacienteComponent,
    DoencaAddComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
