import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './app/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent], // Importar el componente standalone aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnica';
}
