import { Component, Input } from "@angular/core";
import { Appointment } from "@models/DTO/Appointment";

@Component({
  selector: "app-appointment-card",
  templateUrl: "./appointment-card.component.html",
  styleUrl: "./appointment-card.component.scss"
})
export class AppointmentCardComponent {
  @Input()
  public appointment: Appointment;
}
