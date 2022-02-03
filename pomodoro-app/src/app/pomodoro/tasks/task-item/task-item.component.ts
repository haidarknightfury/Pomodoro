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

  @Output()
  taskUpdated: EventEmitter<Task> = new EventEmitter();

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
    this.showMore = !this.showMore;
    this.taskUpdated.emit(updatedTask);
  }

  delete(){
    this.showMore = !this.showMore;
  }

  cancel(){
    this.showMore = !this.showMore;
  }

}
