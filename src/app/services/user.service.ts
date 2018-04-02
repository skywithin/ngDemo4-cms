import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private hostUrl: string = 'http://localhost:52897/api/';

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post(this.hostUrl + 'user/register', user);
  }

  login(user) {
    return this.http.post(this.hostUrl + 'user/login', user);
  }
}
