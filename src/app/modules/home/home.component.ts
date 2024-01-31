import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent {
  constructor(private authService: AuthService) {
    this.authService.user().subscribe({
      next: response => console.log,
      error: error => console.error
    });
  }
}
