import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  itemsRef: AngularFireList<any>;

  constructor(protected db: AngularFireDatabase) {
    this.itemsRef = db.list('usuario');
  }

  insere(usuario){
    this.itemsRef.push(usuario);
  }

}
