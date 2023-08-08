import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  AuthService: any;
  loginError: boolean | undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'El email no es valido' : '';
  }

  login() {
    const email = this.email.value;
    const password = this.password.value;

    if (this.AuthService.login(email, password)) {
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}
