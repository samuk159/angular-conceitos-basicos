import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = "Samuel";
  mostrar = true;
  nomes = ['Samuel', 'João', 'Maria', 'Pedro'];
  url = "https://angular.io";
  idade = 18;

  constructor() {
  }

  mostrarOi() {
    alert('Oi');
  }
}
