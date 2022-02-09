import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent  implements OnInit {

  


  pickCardAnimation = false; 
  currentCard: any= '';
  game!: Game;
  name: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
   
  }

  newGame(){
    this.game = new Game();
    
    console.log(this.game)


  }

  takeCard(){
   
   
    if(!this.pickCardAnimation  && this.game.players.length ==  1 ){   
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
    console.log(this.currentCard)
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

    setTimeout(() => {
      this.game.playedCard.push(this.currentCard);
      this.pickCardAnimation = false;
    },1000)
} else {
  alert("lleine trinken macht kein Spaß")
}
}


openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent); 
  

  dialogRef.afterClosed().subscribe(name => {
   if(name && name.length >0){    
    this.game.players.push(name);
  }
  });

}

}
