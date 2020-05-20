import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showSplash = true;
  public appPages = [
    {title: 'Home', url: '/salesman-home', icon: 'home'},
    
    {title: 'Billing & Orders', url: '/billing-and-order', icon: 'paper'},
    {title: 'History', url: '/history', icon: 'clipboard'},
    {title: 'Settings', url: '/settings', icon: 'construct'},
    {title: 'Sign Out', url: '/home', icon: 'log-out'},
  ];
  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false);
    });
  }
}
