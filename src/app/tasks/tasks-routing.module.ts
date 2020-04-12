import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { TasksRoutingComponent } from './tasks-routing.component';
import { NewTaskComponent } from './new';
import { UpdateTaskComponent } from './update';

export const TasksRoutes: Routes = [
	{
		path: 'tasks',
		component: TasksRoutingComponent,
		children: [
			{ path: '', component: ListTaskComponent },
			{ path: 'new', component: NewTaskComponent },
			{ path: 'update/:id', component: UpdateTaskComponent },
		  
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(TasksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule {
}
