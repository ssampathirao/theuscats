import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'list'
    },
    {
      title: 'CATS President Message',
      url: '/message',
      icon: 'list'
    },
    {
      title: 'Commitee',
      url: '/commitee',
      icon: 'list'
    },
    {
      title: 'Mission',
      url: '/mission',
      icon: 'list'
    },
    {
      title: 'Cremation HelpLine',
      url: '/cremhelpline',
      icon: 'list'
    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'list'
    },	
    {
      title: 'Family HelpLine',
      url: '/famhelpline',
      icon: 'list'
    },

    {
      title: 'Contact US',
      url: '/contactus',
      icon: 'list'
    }

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
    });
  }
}
