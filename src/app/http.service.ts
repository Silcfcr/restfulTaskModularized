import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {


  }
  getTasks(): void {
    let tempObservable = this._http.get('http://localhost:5000/tasks/');
    tempObservable.subscribe(data => console.log('Got our tasks!', data))
  }
  getOneTask(id: string): void {
    // let id: string = "61a02bd4f1827ff9b9bc897b";
    let tempObservable = this._http.get(`http://localhost:5000/tasks/${id}`);
    tempObservable.subscribe(data => console.log('Got one task!', data))
  }

}

