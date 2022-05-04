import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UselessFactsApiService {
  constructor(private http: HttpClient) {}
}
