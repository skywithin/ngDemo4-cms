import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageService {

  constructor(private http: HttpClient) { }

  public pagesBS = new BehaviorSubject<Object>(null);

  private hostUrl: string = 'http://localhost:52897/api/';

  getPages() {
    return this.http.get(this.hostUrl + 'pages');
  }

  getPage(slug) {
    return this.http.get(this.hostUrl + 'pages/' + slug);
  }

  postAddPage(value) {
    return this.http.post(this.hostUrl + 'pages/create', value);
  }

  getEditPage(id) {
    return this.http.get(this.hostUrl + 'pages/edit/' + id);
  }

  postEditPage(value) {
    return this.http.put(this.hostUrl + 'pages/edit/' + value.id, value);
  }
}
