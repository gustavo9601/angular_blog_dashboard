import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {ILogin} from '../../interfaces/ilogin';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showLoginError: boolean;
  public infoLogin: ILogin;

  constructor(public _configService: ConfigService,
              private _loginService: LoginService,
              private router: Router) {
    this.showLoginError = false;
    this.infoLogin = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    if (this._loginService.isAuthenticated()) {
      this.router.navigate(['/resume']);
    }
  }

  checkLogin() {
    console.log('this.infoLogin', this.infoLogin);
    this._loginService.login(this.infoLogin).then(
      (respuesta) => {
        console.log('respuesta login', respuesta);
        if (respuesta) {
          localStorage.setItem('logged', '1');
          this.showLoginError = false;
          this.router.navigate(['/resume']);
        }
      }, (error) => {
        this.showLoginError = true;
        console.log('Error login', error);
      }
    );
  }
}
