import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserRouteAccess implements CanActivate {
    
    
    constructor(private router: Router) { }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      if (localStorage.getItem('access-token')) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    }
  }