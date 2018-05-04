import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string = 'http://192.168.';

  constructor(
    public navCtrl: NavController
  ) {}

  goToUrl() {
    window.open(this.url, '_self', 'location=no,toolbar=no,hardwareback=no');
  }
}
