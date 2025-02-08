import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from './app/login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginModule, 
    AppComponent,
    HttpClientModule,
    UserListComponent,
  ],
  providers: [],
  })
export class AppModule { }