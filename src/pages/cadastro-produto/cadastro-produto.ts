import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the CadastroProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
})
export class CadastroProdutoPage {

  produtoForm: FormGroup;
  home = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private produtoProvider:ProdutoProvider) {

      this.produtoForm = formBuilder.group({
        nome: ['', Validators.required],
        valor: ['', Validators.required]
      });
  }


  salvarProduto(){
    if (!this.produtoForm.valid) {
      alert('preencha todos os campos');
    } else {
      this.produtoProvider.insere(this.produtoForm.value);
      alert('Produto salvo com sucesso!');
      this.voltarPagina();
    }
  }

  voltarPagina(){
    this.navCtrl.setRoot(HomePage);
  }

}
