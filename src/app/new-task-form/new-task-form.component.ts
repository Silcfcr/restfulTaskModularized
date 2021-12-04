import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {
  @Input() createTask : any;
  @Input() getTasksFromService : any;
  newTask : any;
  

  constructor( private _httpService: HttpService ) { }

  ngOnInit(): void {
    this.newTask = {
      title : "titl",
      description : "desri",
      completed : "fal"
    }
  }

  createANewTask() : void {
    console.log(this.newTask);
    this.createTask(this.newTask)
    this.getTasksFromService()
  }


}
