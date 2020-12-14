import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { TasklistService } from '../services/tasklist.service';
import { Task } from './task';

@Component({
  selector: 'app-Task',
  templateUrl: './Task.component.html',
  styleUrls: ['./Task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[]=[];
  constructor(private alertifyService: AlertifyService,
    private taskService: TasklistService) { }

  ngOnInit() {
    this.taskService.getTaskLists().subscribe(data =>
      this.tasks = data
    );
  }

  addToCart() {
    alert("deneme");
    this.alertifyService.success("added");
  }
}