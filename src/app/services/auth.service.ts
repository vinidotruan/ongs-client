import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, tap } from "rxjs";
import { LoginResponse } from "../models/responses/LoginResponse";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private url = environment.api;

  constructor(private readonly httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(`${this.url}/login`, { email, password }).pipe(tap({
      next: response => this.storageToken(response.data.access_token),
      error: error => console.error(error)
    }), map(response => response.data));
  }

  storageToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  user() {
    return this.httpClient.get(`${this.url}/user`);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
