import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { OngsService } from "@services/ongs.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss"
})
export class RegisterComponent {

  public showSuccessAlert = false;

  public form = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    whatsapp: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required)
  });

  constructor(private ongService: OngsService) {
  }

  registerOng() {
    this.ongService.storeOng(this.form.value).subscribe({
      next: response => {
        this.showSuccessAlert = true;
        console.table(response);
      },
      error: error => console.log(error)
    });
  }
}
