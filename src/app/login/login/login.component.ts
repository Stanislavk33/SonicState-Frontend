
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from 'src/models/login-user';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthenticationService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  submit() {
    if (!this.loginForm.invalid){
      let loginUser = new LoginUser();
      loginUser.email = this.loginForm.get('email').value;
      loginUser.password = this.loginForm.get('password').value;

      debugger;
      this.service.login(loginUser).subscribe(
        token => {
          this.service.setToken(token);
          this.router.navigate(['/']);
        }
      );

    }

  }

}
