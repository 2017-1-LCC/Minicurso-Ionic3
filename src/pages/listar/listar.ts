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
  public listaAlunos:any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private providerAluno:AlunosProvider
  ) 
  {

  }

  ionViewDidLoad() {
    this.load();
  }

  public irParaPaginaCacastro(){
    this.navCtrl.push(CadastrarPage);
  }

  public editarItem(item) {
    this.navCtrl.push(CadastrarPage,{param:item});
  }

  public remover(item) {
    this.providerAluno.remover(item);
    this.load();
  }

  private load() {
    this.listaAlunos = this.providerAluno.getListaAlunosProviders();
  }

}
