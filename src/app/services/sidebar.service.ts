import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SidebarService {

  private hostUrl: string = 'http://localhost:52897/api/';

  constructor(private http: HttpClient) { }

  getSidebar() {
    return this.http.get(this.hostUrl + 'sidebar');
  }

  putEditSidebar(value) {
    return this.http.put(this.hostUrl + 'sidebar/edit', value);
  }
}
