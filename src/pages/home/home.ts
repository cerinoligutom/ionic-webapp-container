import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string = 'http://192.168.';

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {}

  goToUrl() {
    const browser = this.iab.create(
      this.url,
      '_self',
      {
        location: 'no',
        toolbar: 'no',
        hardwareback: 'no'
      }
    );
  }
}
