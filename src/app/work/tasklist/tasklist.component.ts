import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  @ViewChild(ChildComponent) Child!: ChildComponent
  task!:string
  name='Yurii'
  surname = 'Moroz'
  count =0
  constructor() { }

  ngOnInit(): void {
  }
  AddTask(){
    if(this.task){
      this.Child.TaskArr.push(this.task)
      this.task='';
      this.Child.statusList.push('IN PROGRESS')
      this.count = (this.Child.TaskArr.length)
    }
  }

  checkStatus(status:boolean):void{
    if(status){
      --this.count;
    }
  }

}
