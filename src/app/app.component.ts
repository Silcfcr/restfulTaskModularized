import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello-Angular, This is my first app';
  constructor(private _httpService: HttpService){}
  
  ngOnInit(): void {
    this._httpService.getTasks();
    this._httpService.getOneTask( "61a02bd4f1827ff9b9bc897b");
  }

  
}
