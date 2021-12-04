import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

// interface ITask {
//   _id: string;

// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello-Angular, This is my first app';
  tasks: any = this.getTasksFromService();
  oneTask: any = null;
  newTask: any;
  taskToUpdate: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    console.log("On init", this.tasks);
    this.newTask = {
      title: "title",
      description: "description",
      completed: "no"
    }

  }

  onSubmit() {
    console.log("Data sent from form", this.newTask)
    this.createTask(this.newTask);
    this.newTask = {
      title: "title",
      description: "description",
      completed: "no"
    }


  }
  getTasksFromService() {
    let Observable = this._httpService.getTasks();
    Observable.subscribe((data) => {
      this.tasks = data;
      this.oneTask = null;
      console.log(this.tasks);
    })
  }

  getOneTaskFromService(id: string) {
    this.oneTask = null;
    let Observable = this._httpService.getOneTask(id)
    Observable.subscribe(data => {
      console.log('Got one task!', data);
      this.oneTask = data;
      console.log("Hello", this.oneTask);
    })
  }
  createTask(task: any) {
    console.log(task);
    let Observable = this._httpService.CreateTask(task);
    Observable.subscribe((data: any) => {
      console.log(data);
      // this.getTasksFromService()
    })

  }

  getOneTaskFromServiceforUpdate(id: string) {
    // this.getOneTaskFromService(id);
    let Observable = this._httpService.getOneTask(id)
    Observable.subscribe((data : any) => {
      console.log(data);
      this.taskToUpdate = data._id;
      this.newTask = data;
      this.updateTask();
    })
  
  }

  deleteTask(id: string) {
    let Observable = this._httpService.DeleteTask(id);
    Observable.subscribe((data: any) => {
      console.log(data);
      console.log("Deleted task", data)
      this.getTasksFromService()
    })


  }
  updateTask() {
    console.log(this.taskToUpdate);
    let Observable = this._httpService.UpdateTask(this.taskToUpdate, this.newTask);
    Observable.subscribe((data: any) => {
      console.log(data);
      console.log("Updated task", data)
      this.getTasksFromService()
    })

  }


}
