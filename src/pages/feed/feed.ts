import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed={
      titulo:"Davi Gouveia Vilela",
      data:"November 5, 1955",
      descricao:"Vou dominar o mundo",
      qntd_likes: 12,
      qntd_comentarios: 4,
      data_post: "11h atrás"
  }

  public lista_filmes = new Array<any>();
  public page = 1;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;
  
  public nome_usuario:string ="Davi g Vilela";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController 
     ) {}

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }
  fechaCarregando(){
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1 + num2);
  }

  doRefresh(refresher) {
  this.refresher = refresher;
  this.isRefreshing = true;
  this.carregarFilmes();
  }

  public abrirDetalhes(filme){
    console.log(filme.budget);
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }

  ionViewDidEnter() {
    this.carregarFilmes();
}

public doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
    console.log(this.page);
}

  public carregarFilmes(newpage: boolean = false){
    this.abreCarregando();
    this.movieProvider.getLatesMovies(this.page).subscribe(data=>{
      const response = JSON.parse((data as any)._body);

      if(newpage)
      {
        this.lista_filmes = this.lista_filmes.concat(response.results);
        this.infiniteScroll.complete();
      }else{
      this.lista_filmes = response.results;
      }
      
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
      
    }, error=> {
      console.log(error);
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }
    )
  }
  }