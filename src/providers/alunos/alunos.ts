import { Injectable } from '@angular/core';

@Injectable()
export class AlunosProvider {
  private listaAlunosProviders:any = [];
  
  constructor() {
  }

  public salvarAluno(aluno:any = {}){
    this.listaAlunosProviders.push(aluno);
    console.log(this.listaAlunosProviders);
  }

  public getListaAlunosProviders(){
    return this.listaAlunosProviders;
  }

}
