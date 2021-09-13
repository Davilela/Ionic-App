import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath="https://api.themoviedb.org/3";
  private ApiKay="&api_key=ffbaec1edb8f596ee7075f51fc13abd5";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  public getLatesMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}` + this.ApiKay);
  
}

  public getMoviesDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?` + this.ApiKay);
  }
}
