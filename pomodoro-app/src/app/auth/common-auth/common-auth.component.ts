import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-auth',
  templateUrl: './common-auth.component.html',
  styleUrls: ['./common-auth.component.scss']
})
export class CommonAuthComponent implements OnInit {

  constructor() { }

  @Input()
  src: string = '';

  ngOnInit(): void {
  }

}
