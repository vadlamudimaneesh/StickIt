import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { LocalServiceService } from 'src/services/local-service.service';
import { Task } from 'src/intefaces/task.interface'


@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  @Output() updateInputTask = new EventEmitter<Task[]>();


  searchControl = new FormControl();
  taskObj!: Task;
  constructor(
    private localStorage : LocalServiceService
  ) {
    this.searchControl.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value) => {
      console.log('Debounced search query:', value);
      this.taskObj = {
        id : 'id-',
        title : value.slice(0, 10),
        description : value,
        timeStamp : Date.now()    
      }
    });
   }


  ngOnInit(): void {
  }

  saveTask(obj: Task){
    let tasksData = this.localStorage.getItem("tasks")
    obj.id = 'id-' + Date.now();
    console.log(tasksData, "----------> 43")
    if(tasksData == null || tasksData.length == 0){
      this.localStorage.setItem("tasks", [obj])
      this.updateInputTask.emit(this.localStorage.getItem("tasks"));
    }else{
      tasksData.push(obj)
      this.localStorage.setItem("tasks", tasksData) 
      this.updateInputTask.emit(tasksData);
    }
    console.log(tasksData, "-----------------> 51")

  }



}


