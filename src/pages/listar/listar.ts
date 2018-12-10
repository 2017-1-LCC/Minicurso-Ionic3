import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunosProvider } from '../../providers/alunos/alunos';
import { CadastrarPage } from '../cadastrar/cadastrar';

@IonicPage()
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private providerAluno:AlunosProvider) {
  }
  public listaAlunos:any = [];

  ionViewDidLoad() {
    this.listaAlunos = this.providerAluno.getListaAlunosProviders();
    console.log(this.listaAlunos);
    console.log('ionViewDidLoad ListarPage');
  }

  irParaPaginaCacastro(){
    this.navCtrl.push(CadastrarPage);
  }

}
