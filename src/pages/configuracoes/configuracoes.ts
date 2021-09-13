import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FotoPage } from '../foto/foto';
import { PerfilPage } from '../perfil/perfil';
import { SbrePage } from '../sbre/sbre';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  rootPage = PerfilPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }
  abrirPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  abrirSobre(){
    this.navCtrl.push(SbrePage);
  }
  abrirFoto(){
    this.navCtrl.push(FotoPage);
  }
}
