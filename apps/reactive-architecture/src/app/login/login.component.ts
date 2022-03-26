import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '@fh/api-interfaces';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _authenticationService: AuthenticationService
  ) {}

  _invalidLogin = false;

  loginForm = this._fb.group(
    {
      username: [null, Validators.required],
      password: [null, Validators.required],
    },
    {
      updateOn: 'change',
    }
  );

  onSubmit(): void {
    const userToBeAuthenticated: User = this.loginForm.value;
    this._authenticationService.authenticate(userToBeAuthenticated).subscribe({
      next: (_) => this.router.navigateByUrl('/main'),
      error: (err) => {
        this._invalidLogin = true;
        console.log(err);
      },
    });
  }
}
