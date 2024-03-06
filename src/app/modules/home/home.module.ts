import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { SharedModule } from "@shared/shared.module";
import { NewAppointmentComponent } from './appointments/new-appointment/new-appointment.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewAppointmentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
