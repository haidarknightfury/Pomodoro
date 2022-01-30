import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Task} from  '../../core/model/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  taskItems = [new Task('Fist task', '')];

 

  ngOnInit(): void {
  }

  addNewTask() {
    console.log('adding new tasks');
    this.taskItems.push(new Task('More task', ''));
  }

}
