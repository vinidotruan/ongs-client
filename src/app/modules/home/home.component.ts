import { Component } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { AppointmentsService } from "@services/appointments.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent {

  public appointments$: Observable<any>;

  constructor(private authService: AuthService, private appointmentsService: AppointmentsService) {
    this.authService.user().subscribe({
      next: response => console.log(response),
      error: error => console.error
    });

    this.appointments$ = this.appointmentsService.getAppointments();
  }
}
