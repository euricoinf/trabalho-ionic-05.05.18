import { UsuarioProvider } from './../../providers/usuario/usuario';
import { EmailValidator } from './../../validators/email';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-login',
  templateUrl: 'cadastro-login.html',
})
export class CadastroLoginPage {

  cadastroLoginForm: FormGroup;
  
  usuario: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthProvider, protected usuarioProvider: UsuarioProvider,
    public formBuilder: FormBuilder) {
      this.cadastroLoginForm = formBuilder.group({
        nome: ['', Validators.required],
        email: ['', Validators.compose([Validators.required,
        EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
      });
  }

  criarUsuario() {
    // verifica se o form foi preenchido corretamente
    if (!this.cadastroLoginForm.valid) {
      console.log(this.cadastroLoginForm.value);
    } else {
      // cria Usuário
      this.authData.signupUser(this.cadastroLoginForm.value.email, this.cadastroLoginForm.value.password)
        .then(authData => {

          this.usuario.id= this.authData.afAuth.auth.currentUser.uid;
          this.usuario.nome = this.cadastroLoginForm.value.nome;

          console.log(this.usuario);
          this.usuarioProvider.insere(this.usuario)
          this.navCtrl.setRoot(LoginPage);

        }, error => {
            alert('Erro ao criar Usuário: ' + error.message);
        });
    }
  }

  
  voltarPagina(){
    this.navCtrl.pop();
  }

  
}
