import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  autorizado(){
    return sessionStorage.getItem("User") != null;
  }

  crearToken(){
    sessionStorage.setItem("User","josue@test.com")
  }

  eliminarToken(){
    sessionStorage.removeItem("User")
  }
}
