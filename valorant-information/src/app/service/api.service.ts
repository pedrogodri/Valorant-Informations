import { WeaponReturn } from './../models/api-return/arsenal-return/weapon-return';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL_API: string = 'https://valorant-api.com/v1';
  private URL_API_WEAPONS = `${this.URL_API}/weapons?language=pt-BR`;

  constructor(public http: HttpClient) { }

  getWeapons() {
    return this.http.get<WeaponReturn>(this.URL_API_WEAPONS);
  }
}
