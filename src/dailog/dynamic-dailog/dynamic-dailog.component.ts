import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksService } from 'src/services/tasks.service';

@Component({
  selector: 'app-dynamic-dailog',
  templateUrl: './dynamic-dailog.component.html',
  styleUrls: ['./dynamic-dailog.component.css']
})
export class DynamicDailogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TasksService
  
  ) { }

  ngOnInit(): void {
  }

  delete(id: any){
    console.log("clicled delte")
    this.taskService.deleteTask(id)
  }

}
