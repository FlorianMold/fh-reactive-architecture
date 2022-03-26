import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'fh-reactive-architecture',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this._authenticationService.attemptAuthentication();
    this._authenticationService.isAuthenticated.subscribe({
      next: (data) => this.router.navigateByUrl('/main'),
      error: (err) => console.error(err),
    });
  }
}
