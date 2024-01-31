import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";


@NgModule({
  declarations: [
    TopNavbarComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavbarComponent,
    SidePanelComponent
  ]
})
export class SharedModule {
}
