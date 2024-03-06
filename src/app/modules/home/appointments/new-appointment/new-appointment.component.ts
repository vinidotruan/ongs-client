import { Component } from "@angular/core";
import { OngsService } from "@services/ongs.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-new-appointment",
  templateUrl: "./new-appointment.component.html",
  styleUrl: "./new-appointment.component.scss"
})
export class NewAppointmentComponent {

  ongs$: Observable<any>;

  public servicesProvided: any;

  constructor(private ongsService: OngsService) {
    this.ongs$ = this.ongsService.getOngs();
  }

  public getProvidedServices(ong): void {
    this.servicesProvided = ong.services_provided;
  }

}
