import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { ApiResponse } from "@models/responses/ApiResponse";
import { OngResponse } from "@models/responses/AppointmentsResponse";

@Injectable({
  providedIn: "root"
})
export class OngsService {
  private url = environment.api;

  constructor(private http: HttpClient) {
  }

  getOngs(): Observable<OngResponse> {
    return this.http.get<ApiResponse<OngResponse>>(`${this.url}/ongs`)
      .pipe(map((response: ApiResponse<OngResponse>) => response.data));
  }

  storeOng(data): Observable<any> {
    return this.http.post<ApiResponse<any>>(`${this.url}/ongs`, data).pipe(map((response: ApiResponse<any>) => response.data));
  }

  getProvidedServices(ongId: string): Observable<any> {
    return this.http.get(`${this.url}/ongs/${ongId}/services-provided`);
  }
}
