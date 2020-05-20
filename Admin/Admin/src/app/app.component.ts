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
  showSplash= true;

  public appPages = [
    {title: 'Home', url: '/homee', icon: 'home'},
    {title: 'Inventory Management', url: '/inventory1', icon: 'briefcase'},
    {title: 'Sales', url: '/sales', icon: 'pulse'},
    {title: 'Manage Salesman', url: '/manage-salesman', icon: 'walk'},
    {title: 'Complaints', url: '/complaints', icon: 'clipboard'},
    
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
