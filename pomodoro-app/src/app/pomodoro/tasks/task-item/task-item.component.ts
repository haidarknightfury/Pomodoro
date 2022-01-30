import { Component, Input, OnInit } from '@angular/core';
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
    this.task.title = this.titleFormControl.value;
    this.task.note = this.noteFormControl.value;
    this.showMore = !this.showMore;
  }

  delete(){
    this.showMore = !this.showMore;
  }

  cancel(){
    this.showMore = !this.showMore;
  }

}
