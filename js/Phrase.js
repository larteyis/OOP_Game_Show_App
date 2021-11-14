/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


//Creates phrases for use in game
class Phrase {
    constructor(phrase){
        this.phrase= phrase.toLowerCase();
    } 
    //addPhraseToDisplay method to create elements to hold letters from phrase
    addPhraseToDisplay(){
        const ul = document.querySelector('#phrase ul');
        for(let i = 0; i < this.phrase.length; i++) {
            const Li = document.createElement('li');
            Li.textContent = this.phrase[i];
            if(this.phrase[i] !==' '){
                Li.className = `hide letter`;
            } else {
                Li.className = 'space';
            }
            ul.appendChild(Li);
        }
    };    
    
    //checkLetter method 
    checkLetter(letter) {
        return this.phrase.includes(letter);//@return {array} An array of phrases that could be used in the game
    };
    
    //showMatchedLetter method to display letters
    showMatchedLetter(letter) {
        document.querySelectorAll(".letter").forEach((keyboard) => {
            if (keyboard.textContent === letter) {
            keyboard.classList.replace("hide", "show")
            }
        });
    };

};