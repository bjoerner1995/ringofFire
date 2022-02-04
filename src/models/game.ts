import arrayShuffle from "array-shuffle";

export class Game{


    public players: string[] = [  ];
    public stack: string[] = [];
    public playedCard: any ; 
    public currentPlayer: number = 0;




    constructor(){
        for(let i = 1; i < 14; i++ )
       this.stack.push(`ace_${i}`),
        this.stack.push(`clubs_${i}`),
        this.stack.push(`diamonds_${i}`),
       this.stack.push(`hearts_${i}`);
        shuffle(this.stack)
        //arrayShuffle(this.stack) 
    }
}
function shuffle(a: any): any[]{     
    var j, x, i;     for (i = a.length - 1; i > 0; i--) {    
    j = Math.floor(Math.random() * (i + 1));   
    x = a[i]  
    a[i] = a[j];
    a[j] = x;     }
    return a; }