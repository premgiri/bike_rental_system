import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { BikeOwnerService } from './bike-owner.service';

@Injectable({ providedIn: 'root' })
export class BikeDetailsRoutingResolveService implements Resolve<any> {
  constructor(private bikeOwnerService: BikeOwnerService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params['id'];
    if (id) {
      return this.bikeOwnerService.getBikeDetails(id).pipe(
        mergeMap((bikeDetails: any) => {
          if (bikeDetails) {
            return of(bikeDetails);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        }),
        catchError(() => {
          this.router.navigate(['404']);
          return EMPTY;
        })
      );
    }
    return of(null);
  }
}
``
