import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  patients = [
    { id: 1, name: 'Maria Silva', age: 28 },
    { id: 2, name: 'João Souza', age: 40 },
    { id: 3, name: 'Carla Mendes', age: 37 },
  ];
}
