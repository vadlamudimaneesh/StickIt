import { Component, OnInit, inject } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { Task } from 'src/intefaces/task.interface';
import { LocalServiceService } from 'src/services/local-service.service';
import { DynamicDailogComponent } from 'src/dailog/dynamic-dailog/dynamic-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/services/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  receivedData : Task[] = [ ];

  constructor(
    private localStorage : LocalServiceService,
    private dialog: MatDialog,
    private tasksService : TasksService
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
    // this.tasksService.updatedTasksListObservable.subscribe((tasks:any) => {
    //   console.log(tasks, "---------> 39")
    //   this.receivedData = tasks;
    // })
    
    if(this.receivedData.length == 0){
      this.receivedData = this.localStorage.getItem("tasks")
      console.log(this.receivedData, this.localStorage.getItem("tasks"))
    }
  }

  updateTasksList(data:any){
    this.receivedData = data
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
