import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Alunos } from '../model/alunos';


@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    private apiUrl = 'https://localhost:7290/api/Aluno';
    private http = inject(HttpClient);

    getAlunos(): Observable<Alunos[]> {
        return this.http.get<Alunos[]>(this.apiUrl);
    }

    updateAluno(aluno: Alunos): Observable<Alunos> {
        const url = `${this.apiUrl}/${aluno.id}`;
        return this.http.put<Alunos>(url, aluno);
    }

    deleteAluno(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    createAluno(aluno: Alunos): Observable<Alunos> {
        return this.http.post<Alunos>(this.apiUrl, aluno);
    }
    
    producer(aluno: Alunos): Observable<Alunos> {
        const url = `https://localhost:7290/producer`;
        return this.http.post<Alunos>(url, aluno);
    }
    


}
