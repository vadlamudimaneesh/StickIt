import { Component, OnInit, inject } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { Task } from 'src/intefaces/task.interface';
import { LocalServiceService } from 'src/services/local-service.service';
import { DynamicDailogComponent } from 'src/dailog/dynamic-dailog/dynamic-dailog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  receivedData : Task[] = [ ];
  x: Task[] = [];

  constructor(
    private localStorage : LocalServiceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getTasksList()
  }

  handleChildEvent(data: Task[]) {
    console.log(data, "----------------> 19")
    this.receivedData = data;
    console.log('Received from child:', this.receivedData);
  }


  getTasksList(){
    console.log(this.receivedData, "-------------> 32")
    if(this.receivedData.length == 0){
      this.receivedData = this.localStorage.getItem("tasks")
      console.log(this.receivedData, this.localStorage.getItem("tasks"))
    }
  }

  openDialog(item:any): void {
    const dialogRef = this.dialog.open(DynamicDailogComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
    });
  }

}
