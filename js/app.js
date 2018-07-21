/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
let twoCards =[];
let moves = 0;
let starcount = 3;
let listStars = document.querySelectorAll("ul.stars li");
let active = false;

/*** const restartGame = document.getElementById('reset');
restartGame.addEventListener('click', function (e) {
  //e.preventDefault();
  //var active = false;
  //reset(); ****/
  
//console.log(listCards);
const iconReset = document.getElementById('reset');
iconReset.addEventListener('click', function(e) {
  e.preventDefault();
  /***if (active == true && moves > 0) {
    function reloadPage();
  }else if {
    ***/
    document.getElementById("my_timer").innerHTML = "00"+ ":" +"00"+ ":" +"00";
    active = true;
    startTimer();
    //console.log("timer has started");
    document.getElementById("start").innerHTML = "PAUSE";
    //resetTimer();
    //startTimer();
    const listCards = document.getElementsByClassName("card");
    for (var i = 0; i < listCards.length; i++) {
      var arraylistCards = Array.from(listCards); //converts htmlcollection to array
      var shuffledarraylistCards = shuffle(arraylistCards);
      const deck = document.querySelector('.deck');
      for (card of shuffledarraylistCards) {
        deck.appendChild(card);
      }
    }reloadPage();
});



//function below reloads the page by JQuery
function reloadPage() {
  $('#reset').click (function() {
      location.reload();
    });
}

/**** //console.log(arraylistCards);
  var shuffledarraylistCards = shuffle(arraylistCards);
  const deck = document.querySelector('.deck');
  for (card of shuffledarraylistCards) {
  deck.appendChild(card);
  } ****/

/**** //function to list the card in array form

const listCards = document.getElementsByClassName("card");
//console.log(listCards);

for (var i = 0; i < listCards.length; i++) {
  var arraylistCards = Array.from(listCards); //converts htmlcollection to array
}
//console.log(arraylistCards);
var shuffledarraylistCards = shuffle(arraylistCards);
const deck = document.querySelector('.deck');
for (card of shuffledarraylistCards) {
  deck.appendChild(card);
}****/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//countup timer code pattern from SIMPLECODE https://www.youtube.com/watch?v=0tNRHPeaVes
//var active = false;
function startTimer() {
  if (active) {
    var timer = document.getElementById("my_timer").innerHTML;
    var arr = timer.split(":");
    var hour = arr[0];
    var min = arr[1];
    var sec = arr[2];

    if (sec == 59) {
      if (min == 59) {
        hour++;
        min = 0;
        if (hour < 10) hour = "0" + hour;
      } else {
        min++;
      }
      if (min < 10) min = "0" + min;
      sec = 0;
    } else {
      sec++;
      if (sec < 10) sec ="0" + sec;
   }

    document.getElementById("my_timer").innerHTML = hour+":"+min+":"+sec;
    setTimeout(startTimer, 1000);
  }
}
/*** //this will start and pause timer through click
function changeState() {
  if(active == false && moves == 0) {
    active = true;
    startTimer();
    //console.log("timer has started");
    document.getElementById("start").innerHTML = "PAUSE";
  } else if (active == true && moves == 0) {
    startTimer();
    //console.log("timer is on pause");
    document.getElementById("start").innerHTML = "PAUSE";
  }else {
    active = false;
    //console.log("timer is on pause");
    document.getElementById("start").innerHTML = "RESUME";
  }****/

/*** // reset function below
function resetTimer() {
  document.getElementById("my_timer").innerHTML = "00"+ ":" +"00"+ ":" +"00";
}****/

/***function startPause() {
const newTrigger = document.getElementById('start');
newTrigger.addEventListener('click', function(e) {
  changeState();
});
}***/

/***const iconReset = document.getElementById('reset');
iconReset.addEventListener('click', function(e) {
  reset();
});****/

//function to select card from classList and do toggle open or show or hide
const newDeck = document.querySelector('.deck');
newDeck.addEventListener('click', event => {
  const pickCard = event.target;
  //startTimer();
  if(active == true) {
    if (!pickCard.classList.contains('match') && !pickCard.classList.contains('open') && twoCards.length <2 && !twoCards.includes(pickCard)) {
    flipCard(pickCard);
    addCardsArray(pickCard);
    }
  }
});


//function to flip card open
function flipCard(pickCard) {
  pickCard.classList.toggle('open');
  pickCard.classList.toggle('show');
}

//stores open cards and compares
function addCardsArray(pickCard) {
  twoCards.push(pickCard);
  if (twoCards.length === 2) {
    console.log(twoCards);
    compareTwoCards();
  }
}


//function to compare two cards in the array
function compareTwoCards () {
  countMoves();
  if (twoCards[0].firstElementChild.className === twoCards[1].firstElementChild.className) {
    console.log("MATCHING CARDS!!!");
    twoCards[0].classList.toggle('match');
    twoCards[1].classList.toggle('match');
    console.log(twoCards);
    twoCards = [];
  }else {
    console.log("sorry try again");      
    setTimeout(() => {      //start on this line and below adds delay to flip the card to close
    flipCard(twoCards[0]);
    flipCard(twoCards[1]);
    console.log(twoCards);
    twoCards = [];  
    }, 1200);
  }   
}


//function below is increment moves +1 whenever comparing cards happen
function countMoves() {
  moves++
  document.getElementById('countedMoves').innerHTML = moves; //update the counted Moves
  console.log(moves);
  removeStar();
}

function removeStar () {
  if (moves >= 10 && moves < 14) {
    listStars[2].remove();
    starcount = (listStars.length - 1);
  }else if (moves >= 14) {
     listStars[2].remove();
     listStars[1].remove();
     starcount = (listStars.length - 2);
   }
}


//function to shuffle arraylistCards is above
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
