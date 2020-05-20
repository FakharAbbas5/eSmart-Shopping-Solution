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
        {title: 'Home', url: '/customer-home', icon: 'home'},
        {title: 'My Orders', url: '/my-orders', icon: 'reorder'},
        {title: 'Complaints', url: '/complaints', icon: 'clipboard'},
        {title: 'Help', url: '/help', icon: 'help-circle'},
        {title: 'Settings', url: '/settings', icon: 'hammer'},
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
        timer(5000).subscribe(() => this.showSplash = false)
    });
  }


  
}
