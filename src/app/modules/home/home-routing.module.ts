import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { authGuard } from "../../guards/auth.guard";
import { NewAppointmentComponent } from "@modules/home/appointments/new-appointment/new-appointment.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  canActivate: [authGuard]
},
  {
    path: "appointments/new",
    component: NewAppointmentComponent,
    canActivate: [authGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
