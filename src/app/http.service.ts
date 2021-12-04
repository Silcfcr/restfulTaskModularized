import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }
  getTasks() {
    return this._http.get('http://localhost:5000/tasks/');
  }
  getOneTask(id: string){
    return this._http.get(`http://localhost:5000/tasks/${id}`);
  }
  
  CreateTask(newTask: any) {
      return this._http.post('http://localhost:5000/tasks/', newTask)
  }

  UpdateTask( id: string, updateTask: any) {
    return this._http.put(`http://localhost:5000/tasks/${id}`, updateTask)
  }

  DeleteTask(id: string ){
    return this._http.delete(`http://localhost:5000/tasks/${id}`)
  }
  

}

