import React, {Component} from "react";
import clickCards from "../../clickCards.json"
import Card from "../card"

let lost=false;
let newCards;

class GameContainer extends Component{
    state={
        cards:clickCards,
        score:0,
        gameDetail:""
    };

   

    handleClick=(letter)=>{
        newCards=this.state.cards.map(card=>{
            if(card.letter===letter){
                if(card.clicked===false){
                card.clicked=true;
                
                }else{
                    console.log("you lose!!!");
                    lost=true;
                   
                }
            }
            return card;
        });
       if(lost){
           this.endGame();
       }else{
           this.continueGame();
       }

    };

    continueGame=function(){
        console.log('continue game');
         this.setState({
            cards:this.shuffleArray(newCards), 
            score: this.state.score+1,
            gameDetail:"   "})
            console.log(newCards);
            console.log(this.state.score);
            if(this.state.score==7){
                this.winGame();
            }
    }

    endGame=function(){
        console.log("endGame");
        this.state.cards.map(card=>{
            card.clicked=false;
            return card;
        });
        this.setState({ 
            cards:clickCards,
            score:0,
            gameDetail:"Try Again!!"})
        lost=false;
    }

    winGame=()=>{
        console.log("win Game");
        this.state.cards.map(card=>{
            card.clicked=false;
            return card;
        });
        this.setState({ 
            cards:clickCards,
            score:0,
            gameDetail:"You won!!"})
        lost=false;
    }
    

    shuffleArray=(cards)=> {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i],cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    render(){    
        return(        
           <div className="container">
                <div className="row">
                    <h1 className="col-12"> Clicky Game Aviation Addition</h1><br/>
                    <p className="col-12"> Click once on each picture to win, Watch out if you repeat one you lose!!</p><br/>
                    <h1 className="col-12">{this.state.gameDetail}</h1><br/>
                    <p className="col-12">{this.state.score}</p>
                </div>
                <div className="row">
                    {this.state.cards.map(card=>{
                        return(
                            < Card key={card.letter}
                            image={card.image}
                            clicked={card.clicked}
                            handleClick={this.handleClick}
                            letter={card.letter}/>
                        );
                    })
                    }
                </div>    
            </div>
        );
    }
    
}

export default GameContainer;