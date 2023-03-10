import { ContentTiersReturn } from './../models/api-return/content-tiers-return/content-tiers-return';
import { BundlesReturn } from './../models/api-return/bundles-return/bundles-return';
import { AgentsReturn } from './../models/api-return/agent-return/agent-return';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeaponReturn } from '../models/api-return/arsenal-return/weapon-return';
import { SingleWeaponReturn } from '../models/api-return/arsenal-return/single-weapon-return';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL_API: string = 'https://valorant-api.com/v1';

  private URL_API_WEAPONS = `${this.URL_API}/weapons`;
  private URL_API_WEAPONS_PT_BR = `${this.URL_API_WEAPONS}?language=pt-BR`
  private URL_API_AGENTS = `${this.URL_API}/agents/?isPlayableCharacter=true&language=pt-BR`;
  private URL_API_BUNDLES = `${this.URL_API}/bundles`;
  private URL_API_CONTENT_TIERS = `${this.URL_API}/contenttiers`;

  constructor(public http: HttpClient) { }

  getWeapons() {
    return this.http.get<WeaponReturn>(this.URL_API_WEAPONS_PT_BR);
  }

  getWeaponByUuid(Uuid: string) {
    return this.http.get<SingleWeaponReturn>(`${this.URL_API_WEAPONS}/${Uuid}`);
  }

  getAgents() {
    return this.http.get<AgentsReturn>(this.URL_API_AGENTS);
  }

  getAgentByUuid(Uuid: string) {
    return this.http.get<SingleWeaponReturn>(`${this.URL_API}/agents/${Uuid}?language=pt-BR`);
  }

  getBundles() {
    return this.http.get<BundlesReturn>(this.URL_API_BUNDLES);
  }

  getContentTiers() {
    return this.http.get<ContentTiersReturn>(this.URL_API_CONTENT_TIERS);
  }
}
