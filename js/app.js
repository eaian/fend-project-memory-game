/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
var active = false;
function startTimer() {
  /***if (active) {***/
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
//this will start and pause timer through click
/***function changeState() {
  if(active == false) {
    active = true;
    startTime ();
    //console.log("timer has started");
    document.getElementById("control").innerHTML = "PAUSE";
  } else {
    active = false;
    //console.log("timer is on pause");
    document.getElementById("control").innerHTML = "START";
  }
}***/

//reset function below for later use
function reset() {
  document.getElementById("my_timer").innerHTML = 00+":"+00+":"+00;
  //console.log("timer has been reset");
}

const newTrigger = document.getElementById('start');
newTrigger.addEventListener('click', function(e) {
  startTimer();
});


/***const resetTrigger = document.getElementById('reset');
newTrigger.addEventListener('click', function(e) {
  reset();
});***/ // this is for later time to create a pause button for the game

/***const clickme2 = document.getElementById('allDeck');
clickme2.addEventListener('click', function(e) {
  console.log("you have clicked the deck");
});***/


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
