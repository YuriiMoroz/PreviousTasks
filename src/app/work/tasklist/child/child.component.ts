import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public TaskArr=['initArrey']
  public statusList = ['IN PROGRESS']
  public editTask!:string
  public position!:number
  public change=false
  public n=0

  @Output() changeCount = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.TaskArr.pop()
  }

  EditFunction(index:number):void{
    this.editTask=this.TaskArr[index]
    this.position=index
    this.change=true
  }

  DeleteFunction(index:number,status: boolean):void{
    this.TaskArr.splice(index,1)
    this.statusList.splice(index,1)
    this.changeCount.emit(status);
  }
  FinishEdit():void{
    this.TaskArr[this.position]=this.editTask
    this.editTask=''
    this.change=false
  }

  checkStatus(index:number, ev:Event){
    let box = <HTMLInputElement>ev.target
    let row = box.parentElement?.parentElement
    let changeColor = <HTMLTableCellElement>row?.childNodes[3]
    row?.childNodes[3]
    let btn = <HTMLButtonElement>row?.childNodes[5].childNodes[0]
    if(box.checked){
      this.statusList[index]='Done'
      changeColor.style.color = 'green'
      btn.disabled=false
    } else{
      this.statusList[index]='IN PROGRESS'
      changeColor.style.color = 'red'
      btn.disabled=true
    }
    
  }
}
