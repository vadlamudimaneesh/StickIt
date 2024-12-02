import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TasksListComponent } from './todo/tasks-list/tasks-list.component';
import { TasksItemComponent } from './todo/tasks-item/tasks-item.component';
import { TaskInputComponent } from './todo/task-input/task-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatDialogModule } from '@angular/material/dialog';
import { DailogModule } from 'src/dailog/dailog.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TasksListComponent,
    TasksItemComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DailogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
