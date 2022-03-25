import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { AuthenticatedUser, User } from '@fh/api-interfaces';
import { UserRepository } from './user-repository';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject<AuthenticatedUser | null>(null);
  private _currentUser = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  private _isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private _userRepository: UserRepository) {}

  attemptAuthentication() {
    const user = {
      username: localStorage.getItem('username')!,
      password: localStorage.getItem('password')!,
    };

    this.authenticate(user);
  }

  /**
   * Authenticates the given user.
   *
   * @param user User to be authenticated
   */
  authenticate(user: User) {
    const foundUser = this._userRepository.findUser(user);
    if (foundUser) {
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(foundUser);
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);
      return of(foundUser);
    }
    return throwError(() => `Couldn't authenticate user: ${user.username}`);
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    localStorage.clear();
  }

  /** Returns the current user as value, assumes that the login already took place */
  getCurrentUser() {
    return this.currentUserSubject.value!;
  }

  get currentUser(): Observable<AuthenticatedUser | null> {
    return this._currentUser;
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated;
  }
}
