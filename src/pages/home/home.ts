
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  
  lista = [];
  

  constructor(public navCtrl: NavController, private produtoProvider:ProdutoProvider, public navParams:NavParams) {
    // retorna um observable, que faz um socket com o firebase (real time)
    this.produtoProvider.getAll().subscribe(res=>this.lista = res);
  }
  // abre a pagina passando parametro para proxima
  abreDetalhes(obj){
    this.navParams.data = obj;
    //this.navCtrl.push(VisualizarFotosPage, this.navParams);
  }



}
