import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alunos } from '../../../model/alunos';
import { AlunoService } from '../../aluno-service';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-aluno-component',
  standalone: true,
  styleUrl: './aluno-component.css',
  templateUrl: './aluno-component.html',
})
export class AlunoComponent {
  private fb = inject(FormBuilder);
  private alunoService = inject(AlunoService);
  private router = inject(Router);
  dados: any;
  erroMessage: string | null = null;
  isLoading: boolean = false;
  aluno: Alunos = new Alunos();
 
  constructor() {
    const router = inject(Router);
    const navigation = router.getCurrentNavigation();
    this.dados = navigation?.extras.state?.['dados'];
    this.aluno = this.dados as Alunos;
    if(this.aluno){
      this.alunoForm.patchValue({
      id: this.aluno?.id,
      nome: this.aluno.nome,
      media: this.aluno.media,
      faltas: this.aluno.faltas,
      situacao: this.aluno.situacao
    });

    }
    
  }



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

    if(this.aluno?.id){
        this.alunoService.updateAluno(this.aluno).subscribe({
        next: (aluno) => {
        
        },
        error: (err) => {
          this.isLoading = false;
          this.erroMessage = 'Erro ao atualizar aluno.';
        }
      });

    }else{
      this.alunoService.createAluno(this.aluno).subscribe({
        next: (aluno) => {
        
        },
        error: (err) => {
          this.isLoading = false;
          this.erroMessage = 'Erro ao criar aluno.';
        }
      });

    }
    
    this.router.navigate(['/home']);
  }
  

}
