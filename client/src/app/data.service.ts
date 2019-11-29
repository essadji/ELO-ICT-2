import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message: string = "hello, I'll retrieve data from the past for you, my liege...";

  sayHello(): string { return this.message; }

  ping() { return this.http.get("http://localhost:2105/query/errors", { responseType: 'text' }) }
  test(){return this.http.post("http://localhost:2105/post",{bla:"bla"}, { responseType: 'text' }) }
  constructor(private http: HttpClient) { }
}