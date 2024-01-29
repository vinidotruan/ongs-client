import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private url = environment.api;

  constructor(private readonly httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    return this.httpClient.post(`${this.url}/login`, { email, password });
  }
}
