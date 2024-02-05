import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { AppointmentCardComponent } from "./appointment-card/appointment-card.component";


@NgModule({
  declarations: [
    TopNavbarComponent,
    SidePanelComponent,
    AppointmentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavbarComponent,
    SidePanelComponent,
    AppointmentCardComponent
  ]
})
export class SharedModule {
}
