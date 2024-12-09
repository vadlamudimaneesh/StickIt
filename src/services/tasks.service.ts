import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { LocalServiceService } from './local-service.service';
import { BehaviorSubject } from 'rxjs';
import { privateDecrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  updatedTasksList$ = new BehaviorSubject<[]>([]);
  updatedTasksListObservable = this.updatedTasksList$.asObservable();

  constructor(
    private localStorage : LocalServiceService
  ) { }

  getInitialList(){
    let data = this.localStorage.getItem('tasks')
    this.updatedTasksList$.next(data)
  }
  deleteTask(id: any){
    let data = this.localStorage.getItem('tasks')
      this.updatedTasksList$.next(data.filter((ele:any) => ele.id != id))
      this.updatedTasksListObservable.subscribe(ele => {
        this.localStorage.setItem("tasks", ele)
      })
  }
}
