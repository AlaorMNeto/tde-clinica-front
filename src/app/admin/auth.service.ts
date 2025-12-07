import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLogged = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@clinica.com' && password === 'senha123') {
      this.isLogged = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLogged = false;
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }
}
