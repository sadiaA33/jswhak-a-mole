

const fields = document.querySelectorAll('.field');
const scoreBoard = document.querySelector('.score');
const mrbump = document.querySelectorAll('.mrbump');
let lastField;
let timeUp = false;
let score = 0;


function randomTime(min, max) {    // random time for the moles to pop up
    return Math.round(Math.random() * (max - min) + min);  
}

function randomHole(fields) {    // random fields that the moles pop up from
    const idx = Math.floor(Math.random() * fields.length);
    const hole = fields[idx];
    if (hole === lastField) {    // make sure the moles dont come from the same field two times in a row
        return randomHole(fields);
    }
    lastField = hole;
    return hole;
}

function peep() {                               // set how quick the moles peep for
    const time = randomTime(200, 1000);         
    const field = randomHole(fields);
    field.classList.add('up');
    setTimeout(() => {
    field.classList.remove('up');               // if clicked moles hide
    if (!timeUp) peep();
    }, time);
}


function startGame() {                          // start game resets score
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();                                     // starts peep function
    setTimeout(() => timeUp = true, 10000)      // length of time of the game
}

  
function bonk(e) {                              // whack function
    console.log(e)
    if(!e.isTrusted) return;                    // is trusted = keycode generator type code
    score++;                                    // score goes up 1 at a time
    this.classList.remove('up');                
    scoreBoard.innerHTML = score;               // prints score on to screen
}
  
mrbump.forEach(mrbump => mrbump.addEventListener('click', bonk))    // on click - whack! 


/*const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastField;
let timeUp = false;
let score = 0;


function randomTime(min, max) {    // random time for the moles to pop up
    return Math.round(Math.random() * (max - min) + min);  
}

function randomHole(fields) {    // random fields that the moles pop up from
    const idx = Math.floor(Math.random() * fields.length);
    const hole = fields[idx];
    if (hole === lastField) {    // make sure the moles dont come from the same field two times in a row
        return randomHole(fields);
    }
    lastField = hole;
    return hole;
}

function peep() {                               // set how quick the moles peep for
    const time = randomTime(200, 1000);         
    const field = randomHole(fields);
    field.classList.add('up');
    setTimeout(() => {
    field.classList.remove('up');               // if clicked moles hide
    if (!timeUp) peep();
    }, time);
}


function startGame() {                          // start game resets score
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep();                                     // starts peep function
    setTimeout(() => timeUp = true, 10000)      // length of time of the game
}

  
function bonk(e) {                              // whack function
    console.log(e)
    if(!e.isTrusted) return;                    // is trusted = keycode generator type code
    score++;                                    // score goes up 1 at a time
    this.classList.remove('up');                
    scoreBoard.innerHTML = score;               // prints score on to screen
}
  
mrbump.forEach(mrbump => mrbump.addEventListener('click', bonk))    // on click - whack! */



