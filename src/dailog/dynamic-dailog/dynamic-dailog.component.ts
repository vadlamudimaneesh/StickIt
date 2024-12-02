import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-dailog',
  templateUrl: './dynamic-dailog.component.html',
  styleUrls: ['./dynamic-dailog.component.css']
})
export class DynamicDailogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  
  ) { }

  ngOnInit(): void {
  }

  delete(){
    console.log("clicled delte")
  }

}
