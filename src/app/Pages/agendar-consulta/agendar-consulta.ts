import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendar-consulta.html',
  styleUrls: ['./agendar-consulta.css']
})
export class AgendarConsultaComponent implements OnInit {
  constructor(private router: Router) {}

  agendamento = {
    nome: '', 
    idade: '', 
    telefone: '', 
    email: '', 
    especialidade: '', 
    medico: '', 
    data: '', 
    horario: '', 
    observacoes: ''
  };

  onSubmit() {
    console.log('Agendamento submetido:', this.agendamento);
    alert('Consulta agendada com sucesso! Entraremos em contato para confirmação.');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    // Define a data mínima como hoje
    const today = new Date().toISOString().split('T')[0];
    setTimeout(() => {
      const dataInput = document.getElementById('data') as HTMLInputElement;
      if (dataInput) {
        dataInput.min = today;
      }
    }, 100);
  }
}

