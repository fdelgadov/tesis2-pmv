import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  rootPath = "http://localhost:8080/api"
  constructor() { }
}
