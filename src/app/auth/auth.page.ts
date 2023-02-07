import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  username?: string;
  password?: string;

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  async login() {
    try {
      await Parse.User.login(this.username, this.password);
      this.router.navigateByUrl('/');
    } catch (ex) {
      console.error(ex);
      alert('Es ist ein Fehler aufgetreten');
    }
  }

}
