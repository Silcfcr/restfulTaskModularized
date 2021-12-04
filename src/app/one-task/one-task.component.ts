import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-task',
  templateUrl: './one-task.component.html',
  styleUrls: ['./one-task.component.css']
})
export class OneTaskComponent implements OnInit {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() completed: string = "";
  @Input() getOneTaskFromService : any
  @Input() oneTask : any
  constructor() { }

  ngOnInit(): void {
  }
  showOneTask( oneTask: any) : void {
    console.log(oneTask, "Jeee");
    this.getOneTaskFromService();
  }

}
