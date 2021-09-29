import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthServiceService} from "../_services/auth-service.service";
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private cs: CookieService,
    private authService: AuthServiceService,
    private router: Router
  ) {
  }
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl("/login");
      return false;
    }
    return this.authService.isAuthenticated();
  }
}
