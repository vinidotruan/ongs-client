import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

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

  constructor(private readonly authService: AuthService) {
  }

  login() {
    const { email, password } = this.form.value;

    if (email && password) {
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log(response);
        }, error: (error) => console.error(error)
      });

    }
  }
}
