import { Component,inject,signal,computed } from '@angular/core';
import { AlunoService } from '../../aluno-service';
import { Alunos } from '../../../model/alunos';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

Alunos
@Component({
  imports: [CommonModule],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  
  private alunoService = inject(AlunoService);
  errorMessage  = signal<string | null>(null);
  itemsList = signal<Alunos[]>([]);
  currentPage = signal<number>(1);
  pageSize = signal<number>(5); // Define o número de itens por página
  totalPages = signal<number>(0);
  private router = inject(Router);

  constructor() {
    
    this.alunoService.getAlunos().subscribe({
        next: (data) => {
          this.itemsList.set(data);
          this.totalPages.set(Math.ceil(this.itemsList().length / this.pageSize()));
          console.log(">>>>>>>>>", this.itemsList());
          console.log(">>>>>totalPages>>>>", this.totalPages());
        },
        error:(err) =>{
          this.errorMessage.set('Failed to load user data');
        }
      });
  }

  editAluno(aluno: Alunos) {
    this.router.navigate(['/aluno'], {
      state: { dados: aluno }
    });
  }

  excluirAluno(aluno: Alunos) {
    this.alunoService.deleteAluno(aluno.id!).subscribe({
      next: () => {
        // Atualiza a lista de alunos após a exclusão
        this.itemsList.set(this.itemsList().filter(a => a.id !== aluno.id));
        this.totalPages.set(Math.ceil(this.itemsList().length / this.pageSize()));
      },
      error: (err) => {
        this.errorMessage.set('Failed to delete aluno');
      }
    }); 
  }

   paginatedItems = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    const endIndex = startIndex + this.pageSize();
    return this.itemsList().slice(startIndex, endIndex);
  });

  pageNumbers = computed(() => {
    const totalPages = this.totalPages();
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  });

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((current) => current + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((current) => current - 1);
    }
  }
  
} 
