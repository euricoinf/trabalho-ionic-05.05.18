import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the LocalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider {


  itemsRef: AngularFireList<any>;

  constructor(protected db: AngularFireDatabase) {
    this.itemsRef = db.list('produto');
  }

  getAllPromisse(): Promise<any> {
    return new Promise((resolve) => {
       this.itemsRef.snapshotChanges().subscribe(items => resolve(items));
    });
  }
 

  getAll() {
    return this.itemsRef.snapshotChanges();
  }



  retornaUm(id):any {
    return this.db.object( 'produto/'+ id).valueChanges();
  }

  insere(produto){
    this.itemsRef.push(produto);
  }

}
