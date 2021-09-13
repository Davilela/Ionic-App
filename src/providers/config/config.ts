import { Injectable } from '@angular/core';

let configk = "config";

@Injectable()
export class ConfigProvider {
  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor(){
  
  }
  //recuperar os dados do localstorange
  getConfigData(): any{
    return localStorage.getItem(configk);
  }
  //gravar os dados do localstorange
  setConfigData(showSlide?: boolean, name?: string, username?:string): any{
    let config = {
      showSlide: null,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(showSlide){
      config.name = name;
    }

    if(showSlide){
      config.username = username;
    }
    localStorage.setItem(configk, JSON.stringify(config))
  }
}
