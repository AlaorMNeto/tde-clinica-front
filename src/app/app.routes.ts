import { Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home';
import { MedicosComponent } from './Pages/medicos/medicos';
import { AgendarConsultaComponent } from './Pages/agendar-consulta/agendar-consulta';

import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PatientsComponent } from './admin/patients/patients.component';

export const routes: Routes = [
  // público
  { path: '', component: HomeComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'agendar', component: AgendarConsultaComponent },

  // admin
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/pacientes', component: PatientsComponent }
];