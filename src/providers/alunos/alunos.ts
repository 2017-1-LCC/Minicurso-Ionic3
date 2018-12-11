import { Injectable } from '@angular/core';

@Injectable()
export class AlunosProvider {
  private listaDeAlunos:any = [];
  
  constructor() {
  }

  public salvarAluno(aluno:any = {}){
    aluno.id = this.guid();
    this.listaDeAlunos.push(aluno);
  }

  public getListaAlunosProviders(){
    return this.listaDeAlunos;
  }

  public editar(aluno:any) {
    let old = this.listaDeAlunos.filter(el => el.id != aluno.id);
    old.push(aluno);
  }

  public remover(aluno) {
    let old = this.listaDeAlunos.filter(el => el.id != aluno.id);
    this.listaDeAlunos = [];
    this.listaDeAlunos = old;
  }

  // gera um GUID ( global unique indefiers ) -> simulação básica.
  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
