# Ionic3 + Firebase


<p style="justify-content:center">O objetivo desse repositório é guardar o material do mini curso de ionic3 + firebase, onde vamos mostrar como criar um projeto com ionic, e como integrar com o BaaS firebase.
</p>

## Introdução

- Para iniciar é preciso instalar o (nodejs)[] feito isso é preciso instalar o ionic através do comando.
````
npm install -g ionic
````
- com o comando **npm install** podemos instalar pacotes que estão disponíveis no (npm)[] ou **node package manager** a flag **-g** indica que vamos instalar o pacote globalmente ou seja o ionic vai ficar disponível em qualquer local com isso podemos ir a qualquer pasta de nossa preferencia e rodar o comando.
````
ionic start <project_name> blank
````
- ionic start é o comando para criar um novo projeto usando o ionic onde tem <project_name> é o local onde devemos colocar o nome do nosso projeto, exemplo aplicativo_movel ou qualquer nome que seja de sua preferencia, o blank indica que vamos usar o template blank que não tem configurações adicionais. Existem outros templates que trazem configurações como menu lateral ou menu em taps.

## Criando tela

- Agora abriremos o projeto criado em uma IDE ou editor de texto como Visual Studio Code, em seguida ativamos o terminal do editor de texto. Para criar uma tela criaremos uma pagina através do comando.
````
ionic generate page <nome_da_pagina>
````
- O comando vai criar uma pasta que fica no diretório **src/pages** com **4 arquivos** nome_da_pagina.html, nome_da_pagina.module.ts, nome_da_pagina.scss e nome_da_pagina.ts, esses arquivos formam a página e cada tem uma função especifica.

- Apos criação da pagina vamos no app.modules.ts que fica no diretório **src/app**, nesse arquivo vamos importa a(s) pagina(s) colocando o comando junto com os outros import:
 ````
import { <nome_da_classe_da_pagina> } from '../pages/<nome_da_pagina>/<nome_da_pagina>';
````
-nome da classe pode ser encontrado no arquivo **src/pages/nome_da_classe_da_pagina/nome_da_classe_da_pagina.ts**, em seguida adiciona o nome da classe mo **declaration** e **bootstrap**.
 ````
@NgModule({
    declarations: [
        MyApp,
        <nome_da_classe_da_pagina>
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ListarPage,
        <nome_da_classe_da_pagina>
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
````
- A cada página criada é necessário fazer o mesmo processo.

## Criando providers
````
ionic generate provider <nome_do_provider>
````
- O comando ira criar uma pasta com o arquivo **nome_do_provider.ts** que ira fica no diretório **src/providers**, depois de criado e necessário importa de maneira parecida com a página.
````
import { <nome_da_classe_do_provider> } from '../providers/<nome_do_provider>/<nome_do_provider>';
````
- O segundo passo é um pouco diferente da criação de página pois voce vai adiciona no **providers** e não em **declarations** e **bootstrap**.
````
@NgModule({
  declarations: [
    MyApp,
    ListarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    <nome_da_classe_do_provider>
  ]
})
````
- A cada provider criada é necessário fazer o mesmo processo.

##Criação do CRUD (Create, Read, Update e Delete)

- "CRUD são as quatro operações básicas utilizadas em bases de dados relacionais ou em interface para utilizadores para criação, consulta, atualização e destruição de dados."(wikipedia), para criação desse CRUD vamos utilizar: **Duas telas**, **um provider** e alguns **components**. As **Telas** serão o sistema de **view**, o **provider** como o **controller** e os **components** fazem parte das **telas**.

# Usando o provider

- No provider ira ficar toda ou a maior parte da regra de negocio do sistema, nela iremos salvar, mostrar, editar, excluir e gerar o GUID.

- Primeiro vamos criar um array onde ira ficar guardado os dados:
````
  private listaDeAlunos:any = [];
````

- Metodo para salvar os alunos:
````
 public salvarAluno(aluno:any = {}){
    aluno.id = this.guid();
    this.listaDeAlunos.push(aluno);
  }
````

- Metodo de get, para retorna a **array** criado para a **tela** que ira **listar**:
````
  public getListaAlunosProviders(){
    return this.listaDeAlunos;
  }
````

- Metodo para modificar/editar uma posição especifica do array:
````
  public editar(aluno:any) {
    let old = this.listaDeAlunos.filter(el => el.id != aluno.id);
    old.push(aluno);
  }
````

- Metodo para apagar uma posiçao especifica do array:
````  
  public remover(aluno) {
    let old = this.listaDeAlunos.filter(el => el.id != aluno.id);
    this.listaDeAlunos = [];
    this.listaDeAlunos = old;
  }
````

-Metodo gera um GUID ( global unique indefiers ) -> simulação básica:
````  
  private guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
````

# Primeiro passo com a tela

- Será nescesario criar duas telas **listar** e **cadastrar**, uma para fazer o cadastro/editar e na outra iremos listar, excluir e chamar a pagina cadastrar/editar.

- Após criar as telas iremos ir na de **listar** no arquivo **HTML** onde iremos adicionar um **component**  do tipo **button** que ira abrir a tela de **cadastro**:

````
  <ion-fab right bottom>
      
    <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>
      <ion-fab-list side="top">
        <button ion-fab (click)='irParaPaginaCacastro()'><ion-icon name="person-add"></ion-icon></button>
    </ion-fab-list>
      
  </ion-fab>
````

- Em seguida vamos para o arquivo **.ts** onde iremos criar o metodo e importa a pagina cadastro, para importa usaremos o seguinte codigo:
````
import { CadastrarPage } from '../cadastrar/cadastrar';
````

- Entao criar o metodo:
````
public irParaPaginaCacastro(){
    this.navCtrl.push(CadastrarPage);
  }
````

- Agora vamos para a tela de cadastro iremos importa o provider, assim podendo salvar os dados:
````
import { AlunosProvider } from '../../providers/alunos/alunos';
````

- Agora criar um objeto e depois instânciar o provider no constructor, dentro da constructor ira ter um if que ira diferenciar se vai ser tela de cadastro ou editar:
````
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
````

- Por ultimo no arquivo **.ts** iremos criar os metodos para chamar os provider
````
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
````

- Agora o arquivo cadastro do tipo **HTML**, nele iremos adicionar os **component** de  **button** e dos **campos de input**:

- **campos de input**:
````
  <ion-list>

    <ion-item>
      <ion-label floating>Nome</ion-label>
      <ion-input type="text" [(ngModel)]="aluno.nome"></ion-input>
    </ion-item>
  
    <ion-item>
      <ion-label floating>Sobrenome</ion-label>
      <ion-input type="text" [(ngModel)]="aluno.sobrenome"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label floating>e-mail</ion-label>
        <ion-input type="text" [(ngModel)]="aluno.email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label floating>Sexo</ion-label>
        <ion-select [(ngModel)]="aluno.sexo">
          <ion-option value="f">Feminino</ion-option>
          <ion-option value="m">Masculino</ion-option>
        </ion-select>
    </ion-item>

    <ion-item>
      <ion-label floating>Data de nascimeto</ion-label>
      <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="aluno.nascimento"></ion-datetime>
    </ion-item>

  </ion-list>
````

- **button**
````
  <div align="center">
    <button *ngIf="!aluno.id" ion-button color="secondary" icon-start (click)="cadastrarAluno()">
        <ion-icon name='ios-cafe'></ion-icon>
        Cadastrar
    </button>

    <button *ngIf="aluno.id" ion-button color="secondary" icon-start (click)="editarAluno()">
        <ion-icon name='ios-cafe'></ion-icon>
        Editar
    </button>
    
    <button ion-button color="danger" icon-start (click)="cancelarCadastro()">
        <ion-icon name='close'></ion-icon>
        Cancelar
    </button>
  </div>
````

# Implementando a tela de listar

- Com o cadastro pronto iremos adicionar os **component** do para listar, editar e excluir e criar os metodos. Primeiro importa e instância o provider e o alert, no alert so precisa adicionar **AlertController** em um import existente:

- Importa:
````
  import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
  import { AlunosProvider } from '../../providers/alunos/alunos';
````

- instância:
````
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private providerAluno:AlunosProvider,
    public alertaCtrl: AlertController
  )
````

- Agora iremos pegar os dados salvos no **provider** criando um **array** que copiara os dados dele, em seguida adicionando um metodos para carregar os dados sempre que a tela aparecer:
````
  public listaAlunos:any = [];
````

- metodos:
````
  ionViewDidLoad() {
    this.load();
  }

  private load() {
    this.listaAlunos = this.providerAluno.getListaAlunosProviders();
  }
````

- Agora adicionar os metodos para editar, remover e mostrar uma mensagem com os dados, essa mensagem utiliza o **AlertController**
````
  public editarItem(item) {
    this.navCtrl.push(CadastrarPage,{param:item});
  }

  public remover(item) {
    this.providerAluno.remover(item);
    this.load();
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



- Apos isso vamos para o arquivo **HTML** onde iremos usar um **component** do tipo list slide:
````
 <ion-list>
    <ion-item-sliding *ngFor="let aluno of listaAlunos" (click)="alerta(aluno)">
      <ion-item >
        <ion-avatar item-start>
            <ion-icon name="contact" style="font-size:40px"></ion-icon>
        </ion-avatar>
        <h2>{{ aluno.nome }}</h2>
      </ion-item>
      <ion-item-options side="left">
        <button ion-button color="primary" (click)="editarItem(aluno)">
          <ion-icon name="build"></ion-icon>
          Editar
        </button>
      </ion-item-options>

      <ion-item-options side="right">
        <button ion-button color="danger" (click)="remover(aluno)">
          <ion-icon name="trash"></ion-icon>
          Remover
        </button>
      </ion-item-options>
      
    </ion-item-sliding>
  </ion-list>
````