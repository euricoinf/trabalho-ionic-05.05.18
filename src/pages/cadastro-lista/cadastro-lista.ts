import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the CadastroListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-lista',
  templateUrl: 'cadastro-lista.html',
})
export class CadastroListaPage {

  listaForm: FormGroup;
  produtos=[];
  produtosAdicionados=[];

  constructor(public navCtrl: NavController, private produtoProvider:ProdutoProvider, 
    public navParams:NavParams, public formBuilder: FormBuilder) {
    this.listaForm = formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required]
    });
    // retorna um observable, que faz um socket com o firebase (real time)
    this.produtoProvider.getAll().subscribe(res=>this.produtos = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroListaPage');
  }


  addOrRemove(item, toogle){
    console.log(toogle.checked);
    console.log(item);
  }
}
