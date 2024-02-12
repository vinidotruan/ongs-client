import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthService).hasToken() ? true : router.navigate(["/login"]);
};
