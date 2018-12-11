import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AlunosProvider } from '../providers/alunos/alunos';

import { ListarPage } from '../pages/listar/listar';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';

@NgModule({
  declarations: [
    MyApp,
    ListarPage,
    CadastrarPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListarPage,
    CadastrarPage],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlunosProvider
  ]
})
export class AppModule {}
