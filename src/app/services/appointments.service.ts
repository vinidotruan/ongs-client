import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { AppointmentsResponse } from "@models/responses/AppointmentsResponse";
import { ApiResponse } from "@models/responses/ApiResponse";

@Injectable({
  providedIn: "root"
})
export class AppointmentsService {

  private url = environment.api;

  constructor(private http: HttpClient) {
  }

  getAppointments(): Observable<AppointmentsResponse> {
    return this.http.get<ApiResponse<AppointmentsResponse>>(`${this.url}/appointments`).pipe(map(response => response.data));
  }

}
