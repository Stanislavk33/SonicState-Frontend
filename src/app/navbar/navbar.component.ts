import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isAuthorised: boolean;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.isAuthorised.subscribe(isAuthorised => {
      this.isAuthorised = isAuthorised;
    });
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
