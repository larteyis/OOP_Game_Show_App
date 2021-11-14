/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Create Game class 
class Game {
    constructor(){
        this.missed=0;
        this.phrases= this.createPhrases();
        this.activePhrase=null;
    }
    
    //An array of phrases
    createPhrases(){
        const phrases= [new Phrase("May the Force be with you"),
                        new Phrase("There is no place like home"),
                        new Phrase("No man is a failure who has friends"),
                        new Phrase("What we do in life echoes in eternity"),
                        new Phrase("All you need is love")];
        return phrases;
    };
    
    //Method to randomize phrases
    getRandomPhrase(){
        let randomPhrase = this.phrases[Math.floor( Math.random() * this.phrases.length )];
        return randomPhrase;
    };
    
    //startGame method to hide start screen overlay
    startGame(){
        this.missed=0;
        const startgame = document.getElementById('overlay');
        startgame.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    
    //checkForWin method to see if player revealed all the letters in active phrase
    checkForWin(){
        return document.querySelectorAll('.hide').length === 0;
    };
    
    //removeLife method removes a heart after every wrong answer
    removeLife(){
        document.getElementsByClassName("tries")[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver();
        }//if user chose 5 wrong letters , the gameOver() will be called.
    
    };
    
    //gameOver method to end game
    gameOver(wonGame){
        const gameOverMessage = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        if (wonGame == true){
            gameOverMessage.innerHTML = "Great job! You won this game!"
            overlay.className = 'win';
        } else {
            gameOverMessage.innerHTML = "You lost this game. Try again"
            overlay.className = 'lose';
        }
        this.resetGame();
    };

    resetGame(){

    };

    //handleInteraction method to handle keyboard button clicks
    handleInteraction(e){
        e.disabled = true;
        if (this.activePhrase.checkLetter(e.textContent)){
            e.classList.add("chosen");
            this.activePhrase.showMatchedLetter(e.textContent)
            if(this.checkForWin()){
                this.gameOver(true);
            }
        }else{
            e.classList.add("wrong");
            this.removeLife();  
        }
    };

    //resetGame method to reset gameboard between games 
    resetGame(){
        this.missed = 0;
        const hearts = document.getElementsByClassName('tries');
        const phrase = document.getElementById('phrase');
        const key = document.querySelectorAll('.key');
        
        //Remove all `li` elements from the Phrase `ul` element.Set it to empty string.
        //Using .firstElementChild to make sure after reset the ('#phrase ul') won't be gone.
        phrase.firstElementChild.innerHTML = '';
        for (let i = 0; i < key.length; i++) {
			key[i].className = 'key';
			key[i].disabled = false;
		}
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstElementChild.src = 'images/liveHeart.png';
        }
        
    }
}