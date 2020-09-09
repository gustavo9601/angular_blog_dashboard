import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {ILogin} from '../interfaces/ilogin';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afauth: AngularFireAuth,
              private router: Router) {
  }


  login(infoLogin: ILogin) {
    return this.afauth.auth.signInWithEmailAndPassword(infoLogin.email, infoLogin.password);
  }

  isAuthenticated() {
    console.log('localStorage.getItem(\'logged\')', localStorage.getItem('logged'));
    return localStorage.getItem('logged');
  }

  logOut() {
    this.afauth.auth.signOut();
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }

}
