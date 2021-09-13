import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[
    MoovieProvider
  ]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeid;
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MoovieProvider) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    console.log("ate aqui chegou");
    this.movieProvider.getMoviesDetails(this.filmeid).subscribe(data=>{
      this.filme = JSON.parse((data as any)._body);
    }, error=>{
      console.log(error);
    })  
  }

}
