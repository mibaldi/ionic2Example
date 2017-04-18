import { Component } from '@angular/core';

import {
  AlertController,
  LoadingController,
  NavController
} from 'ionic-angular';

import {TabsPage} from "../tabs/tabs";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { "email":"", "password":""}

  constructor(
    private alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public navCtrl:NavController,
    private userService:UserService
  ){

  }
  ngOnInit() {
    console.log('Arranco el init');
  }
  login = ():void =>{
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (this.user.email != "" && this.user.password != ""){
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.push(TabsPage)
      }, 5000);
    }
    else{
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Login',
        subTitle: 'Usuario y/o contraseña invalida.',
        buttons: ['Aceptar']
      });
      alert.present();
    }
  }

  signIn = ():void=>{
    alert("signIn");
  }

}
