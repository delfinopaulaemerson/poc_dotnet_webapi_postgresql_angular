export class Alunos {
    id?: number;
    nome?: string;
    media?: number;
    faltas?: number;
    situacao?: string;

    constructor(id?: number, nome?: string, media?: number, faltas?: number, situacao?: string) {
        this.id = id;
        this.nome = nome;
        this.media = media;
        this.faltas = faltas;
        this.situacao = situacao;
    }
   
}    