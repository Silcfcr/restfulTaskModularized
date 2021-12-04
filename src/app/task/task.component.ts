import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() completed: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
