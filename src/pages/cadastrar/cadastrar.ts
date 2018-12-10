import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListarPage } from '../listar/listar';
import { AlunosProvider } from '../../providers/alunos/alunos';

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {
  aluno:any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private providerAluno:AlunosProvider
  ) 
  {
    if(this.navParams.get('param')) {
      this.aluno = this.navParams.get('param')
    }
  }

  cadastrarAluno(){
    this.providerAluno.salvarAluno(this.aluno);
    this.navCtrl.pop();
  }

  editarAluno() {
    this.providerAluno.editar(this.aluno);
    this.navCtrl.pop();
  }

  cancelarCadastro(){
    this.navCtrl.pop();
  }
}
