// init
let guess = document.querySelector(".guess");
let btn = document.querySelector(".submit");
let screen = document.querySelector(".screen");
const max = 21;

 let  numberToGuess = 13;

btn.addEventListener("click", ()=>{

    if( guess.value == numberToGuess){
        screen.innerText= "Well we have a winner";
    }
    else if(guess.value < numberToGuess){
        screen.innerText = "Sorry too low guess again";
    }else if ( guess.value > numberToGuess){
        screen.innerText = "Sorry too high guess again";
    }
})

