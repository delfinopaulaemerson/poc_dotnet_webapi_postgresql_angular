import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login-component',
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  //private authService = inject(AuthService);
  private router = inject(Router);

  erroMessage: string | null = null;
  isLoading: boolean = false;
  
  loginForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  });

  onSubmit() : void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.erroMessage = null;

    const credenciais = this.loginForm.getRawValue() as { email: string, password: string };

    this.router.navigate(['/home']);

  }
      
}
