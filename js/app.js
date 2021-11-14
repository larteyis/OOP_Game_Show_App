// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * app.js */


//Create game variable
let game;

//Set event listener on reset button to respond to a click
const buttonReset = document.getElementById("btn__reset");
buttonReset.addEventListener("click", () =>{
    game = new Game;
    game.startGame();
});

//Set event listener on keyboard keys  to respond to clicks
const onscreenKeyboard = document.getElementById("qwerty");
onscreenKeyboard.addEventListener('click', (e) =>{
    if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
    }
})

