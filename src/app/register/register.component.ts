import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterUser } from 'src/models/register-user';
import { RegisterService } from 'src/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RegisterService, private router: Router) {

  }

  ngOnInit() {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  submit() {
   if (!this.registerForm.invalid) {
    let registerUser = new RegisterUser();

    registerUser.email = this.registerForm.get('email').value;
    registerUser.firstName = this.registerForm.get('firstName').value;
    registerUser.lastName = this.registerForm.get('lastName').value;
    registerUser.password = this.registerForm.get('password').value;

    this.service.register(registerUser).subscribe(r => r = this.router.navigate(['/'])
    ) ;


   }


  }

}
