import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    private providerAluno:AlunosProvider,
    public alertaCtrl: AlertController
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

  public alerta(item:any){   
    let texto = "Sobrenome: " + item.sobrenome +" || E-mail: " + item.email + 
    " || Sexo: " + item.sexo + " || Nascimento: " + item.nascimento; 
    
    const alerta = this.alertaCtrl.create({
      title: item.nome,
      subTitle: texto,
      buttons: ['OK']
    });
    alerta.present();
  }

}
