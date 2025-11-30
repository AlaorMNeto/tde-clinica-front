import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './medicos.html',
  styleUrls: ['./medicos.css']
})
export class MedicosComponent implements AfterViewInit {
  @ViewChild('modalMedico1') modalMedico1!: ElementRef;
  @ViewChild('modalMedico2') modalMedico2!: ElementRef;
  @ViewChild('modalMedico3') modalMedico3!: ElementRef;
  @ViewChild('modalMedico4') modalMedico4!: ElementRef;
  @ViewChild('modalMedico5') modalMedico5!: ElementRef;
  @ViewChild('modalMedico6') modalMedico6!: ElementRef;

  modals: any[] = [];

  constructor() {}

  ngAfterViewInit() {
    this.modals = [
      this.modalMedico1,
      this.modalMedico2,
      this.modalMedico3,
      this.modalMedico4,
      this.modalMedico5,
      this.modalMedico6
    ];
  }

  abrirModal(modalElement: ElementRef) {
    const modal = new bootstrap.Modal(modalElement.nativeElement);
    modal.show();
  }
}


