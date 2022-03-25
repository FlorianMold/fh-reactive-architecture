import { Injectable } from '@angular/core';
import { AuthenticatedUser, User } from '@fh/api-interfaces';

@Injectable({
  providedIn: "root"
})
export class UserRepository {
  /**
   * All users of the application
   * @private
   */
  private _users: AuthenticatedUser[] = [
    {
      username: 'florian',
      password: '1234',
      person: {
        name: 'Florian M',
        iban: 'AT1234',
      },
    },
    {
      username: 'daniel',
      password: '1234',
      person: {
        name: 'Daniel K',
        iban: 'AT4321',
      },
    },
  ];

  /**
   * Tries to find the given user in the repository.
   * @param user
   */
  findUser(user: User) {
    return this._users
      .find((u) => u.username === user.username && u.password === user.password) || null;
  }
}
