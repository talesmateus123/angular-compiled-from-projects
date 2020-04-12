import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, FinishedTaskDirective } from './shared';
import { ListTaskComponent } from './list/';
import { NewTaskComponent } from './new/';
import { UpdateTaskComponent } from './update/';
import { TasksRoutingComponent } from './tasks-routing.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    ListTaskComponent,
    NewTaskComponent,
    UpdateTaskComponent,
    FinishedTaskDirective,
    TasksRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TasksRoutingModule
  ],
  exports: [
    ListTaskComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
