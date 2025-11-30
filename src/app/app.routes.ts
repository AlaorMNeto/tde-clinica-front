import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home';
import { MedicosComponent } from './Pages/medicos/medicos';
import { AgendarConsultaComponent } from './Pages/agendar-consulta/agendar-consulta';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medicos', component: MedicosComponent },
  { path: 'agendar-consulta', component: AgendarConsultaComponent },
  { path: '**', redirectTo: '' }
];

