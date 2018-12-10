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

## Criando primeira tela

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