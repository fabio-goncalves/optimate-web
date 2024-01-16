import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn
} from '@angular/router';
import { StorageService } from '../services/storage.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const storageService = inject(StorageService);
  const router = inject(Router);

  return storageService.isLoggedIn() ? true : router.navigate(['/login']);
};
