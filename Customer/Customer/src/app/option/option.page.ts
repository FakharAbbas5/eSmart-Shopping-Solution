import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  SignUp(){
    this.nav.navigateForward('/sign-up');
    
  }

  SignIn(){
    this.nav.navigateForward('/home');
  }
}
