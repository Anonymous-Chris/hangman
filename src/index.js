import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
let game1 
window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    render()

})

const render = ()=>{
    puzzleEl.textContent= game1.getPuzzle()
    guessEl.textContent= game1.getStatusMsg()
}
const startGame = async () =>{
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle.name,7)
    render()
}

document.querySelector('#reset').addEventListener('click',startGame)

startGame()

