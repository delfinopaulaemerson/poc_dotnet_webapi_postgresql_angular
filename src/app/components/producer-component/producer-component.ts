import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlunoService } from '../../aluno-service';
import { Router } from '@angular/router';
import { Alunos } from '../../../model/alunos';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-producer-component',
  styleUrl: './producer-component.css',
  templateUrl: './producer-component.html',
})
export class ProducerComponent {
   private fb = inject(FormBuilder);
  private alunoService = inject(AlunoService);
  private router = inject(Router);
  erroMessage: string | null = null;
  isLoading: boolean = false;
  aluno: Alunos = new Alunos();

   alunoForm = this.fb.group({
    id: [0],
    nome: ['',[Validators.required,Validators.minLength(10)]],
    media: [0,[Validators.required,Validators.min(0),Validators.max(10)]],
    faltas: [0,[Validators.required,Validators.min(0),Validators.max(10)]],
    situacao: ['',[Validators.required,Validators.minLength(5)]]
  });

   onSubmit() : void {
    if (this.alunoForm.invalid) {
      this.alunoForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.erroMessage = null;

    const dadosAlunos = this.alunoForm.getRawValue() as {id: number, nome: string, media: number, faltas: number, situacao: string };
    this.aluno = dadosAlunos as Alunos;

    this.alunoService.producer(this.aluno).subscribe({
      next: (aluno) => {
        
        //
      },
      error: (error) => {
        this.isLoading = false;
        this.erroMessage = 'Erro ao enviar os dados do aluno para o Kafka.';
        console.error('Erro ao enviar os dados do aluno para o Kafka:', error);
      }
    });
    this.isLoading = true;
    this.router.navigate(['/home']);
  }

}
