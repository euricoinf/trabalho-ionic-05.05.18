import { CadastroListaPage } from './../pages/cadastro-lista/cadastro-lista';
import { CadastroProdutoPage } from './../pages/cadastro-produto/cadastro-produto';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { FotosProvider } from '../providers/fotos/fotos';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { CadastroLoginPage } from '../pages/cadastro-login/cadastro-login';
import { ProdutoProvider } from '../providers/produto/produto';
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroLoginPage,
    CadastroProdutoPage,
    CadastroListaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), //criado arquivo deo configuracao e inicia o firebase
    AngularFireDatabaseModule, // modulo database
    AngularFireAuthModule // modulo de autenticacao
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroLoginPage,
    CadastroProdutoPage,
    CadastroListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FotosProvider,
    Camera,     
    Geolocation,
    ProdutoProvider,
    UsuarioProvider 
  ]
})
export class AppModule {}
