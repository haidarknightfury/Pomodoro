import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/core/model/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  @Input()
  task: Task;

  @Input()
  index: number = 0;

  @Input()
  active: boolean = false;

  @Output()
  taskUpdated: EventEmitter<Task> = new EventEmitter();

  @Output()
  taskDeleted: EventEmitter<Task> = new EventEmitter();

  showMore: boolean;

  titleFormControl = new FormControl();
  noteFormControl = new FormControl();

  ngOnInit(): void {
    this.titleFormControl.setValue(this.task.title);
    this.noteFormControl.setValue(this.task.note);
  }

  showMoreInfo(){
    this.showMore = !this.showMore;
  }

  save() {
    const updatedTask = new Task(this.titleFormControl.value, this.noteFormControl.value);
    updatedTask.id = this.task.id;
    updatedTask.completed = this.task.completed;
    updatedTask.estPomodoro = this.task.estPomodoro;
    this.showMore = !this.showMore;
    console.log('updating task', updatedTask);
    this.taskUpdated.emit(updatedTask);
  }

  delete(){
    this.showMore = !this.showMore;
    this.taskDeleted.emit(this.task);
  }

  cancel(){
    this.showMore = !this.showMore;
  }

}
