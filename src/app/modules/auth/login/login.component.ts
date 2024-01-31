import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss"
})
export class LoginComponent {
  public form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  login() {
    const { email, password } = this.form.value;

    if (email && password) {
      this.authService.login(email, password).subscribe({
        next: (response: any) => {
          console.log(response);
          this.authService.storageToken(response.data.access_token);
          this.router.navigate(["/home"]);
        }, error: (error) => console.error(error)
      });

    }
  }
}
