import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInfoComponent } from './game-info/game-info.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'game', component: GameComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'game-info', component: GameInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
