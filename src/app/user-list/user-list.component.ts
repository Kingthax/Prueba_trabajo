import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-user-list',
  standalone: true, // Asegurar que sea standalone si lo es
  imports: [CommonModule], // Importar CommonModule para usar *ngFor
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers().subscribe(
      (data) => {
        console.log("aca", data);
        this.users = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }
}
