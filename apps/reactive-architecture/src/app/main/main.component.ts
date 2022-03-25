import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../core/services/authentication.service";
import { Router } from "@angular/router";
import { AuthenticatedUser } from "@fh/api-interfaces";
import { filter, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "fh-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(private router: Router, private _authenticationService: AuthenticationService) {
  }

  handleLogout() {
    this._authenticationService.logout();
    this.router.navigateByUrl("/login");
  }

  _currentUser!: Observable<string>;

  ngOnInit() {
    this._authenticationService.attemptAuthentication();

    this._currentUser = this._authenticationService
      .currentUser
      .pipe(map((value) => value?.person.name ?? ""));
  }
}
