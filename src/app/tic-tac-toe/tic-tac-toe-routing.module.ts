import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeRoutingComponent } from './tic-tac-toe-routing.component';
import { TicTacToeComponent } from './tic-tac-toe.component';


export const TicTacToeRoutes: Routes = [
	{
		path: 'tic-tac-toe',
		component: TicTacToeRoutingComponent,
		children: [
			{ path: '', component: TicTacToeComponent }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(TicTacToeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TicTacToeRoutingModule {
}
