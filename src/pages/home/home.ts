import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {twitt} from "../../commons/twitt";
import {Fav} from "../../componets/fav/fav"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list:Array<twitt> = [
    {img:'https://pbs.twimg.com/profile_images/435171150851629057/Fi3sL9lE_400x400.jpeg', nick_name:'@mibaldi14', text:'Mikel'},
    {img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
    {img:'https://pbs.twimg.com/profile_images/2776461951/5ebe6510292b9fd31efbfc8e04b72a48_400x400.png', nick_name:'@Smoolfh', text:'test 1234'}
  ];

  constructor(public navCtrl: NavController) {

  }
  onFav(response:string){
    alert(response);
  }

}
