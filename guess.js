let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guess1 = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const p = document.createElement('p');
const message = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let numguess=1
let playgame=true

if(playgame)
{
    submit.addEventListener('click',function (e)
    {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateguess(guess)
    })
}
function validateguess(guess)
{
    if(isNaN(guess))
    {
        alert('please enter valid number')
    }
    else if(guess < 1)
    {
        alert('please enter a number more than 1')
    }
    else if(guess > 100 )
    {
        alert('please enter a number less than 100')
    }
    else
    {
             if(numguess === 10)
             {
                   displayguess(guess)
                   displayMessage(`Game Over, Random Number is ${randomNumber}`)
                   endgame()
             }
             else
             {
                  displayguess(guess)
                  checkguess(guess)
             }
    }
}
function checkguess(guess)
{
     if(guess === randomNumber)
     {
        displayMessage(`You Guessed Right`)
        endgame()
     }
     else if(guess < randomNumber)
     {
        displayMessage(`Number Is Too Low`)
     }
     else if(guess > randomNumber)
     {
        displayMessage(`Number Is Too High`)
     }
}
function newgame()
{
  const w =  document.querySelector('#newgame')
  w.addEventListener('click',function(e)
  {
    e.preventDefault()
    numguess = 1
    message.innerHTML = ''
    randomNumber = parseInt(Math.random() * 100 + 1)
    guess1.innerHTML = ''
    lastResult.innerHTML =`${11 - numguess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playgame = true
  })
}
function endgame()
{
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id=newgame >Start New Game </h2>`
    startOver.appendChild(p)
    playgame = false
    newgame()
}
function displayguess(guess)
{
   userInput.value=''
   guess1.innerHTML += ` ${guess}, `
   numguess++
   lastResult.innerHTML =`${11 - numguess}`
}
function displayMessage(mess)
{
   message.innerHTML = `<h2>${mess}</h2>`
}