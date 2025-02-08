import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component'; // Importamos el componente

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginComponent // En lugar de declararlo, lo importamos
  ],
  exports: [LoginComponent] // Exportamos el componente
})
export class LoginModule { }