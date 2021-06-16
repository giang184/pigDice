//business logic PigDice
function PigDice () {
  this.player1Score = 0;
  this.player2Score = 0;
  this.playerTurn = true; //true is player 1's turn. False is player 2's turn
  this.turnScore = 0;
}

function random () {
  return 1 + parseInt(6*Math.random());
}

PigDice.prototype.displayTurnScore = function () {
  if (this.playerTurn) {
    $(".currentScore1").html(this.turnScore);
  }
  else {
    $(".currentScore2").html(this.turnScore);
  }
}

PigDice.prototype.displayTotalScores = function () {
  $(".player1Score").html(this.player1Score);
  $(".player2Score").html(this.player2Score);
}

PigDice.prototype.newGame = function () {
  this.player1Score = 0;
  this.player2Score = 0;
  this.playerTurn = true; //true is player 1's turn. False is player 2's turn
  this.turnScore = 0;
  this.displayTotalScores();
  $(".currentScore1").html("0");
  $(".currentScore2").html("0");
}

// User Interface Logic ---------
let myPigDice = new PigDice ();

$(document).ready(function() {
  myPigDice.displayTotalScores();
  myPigDice.displayTurnScore(); 
  document.getElementById("player1").style.backgroundColor = "lightblue";
  document.getElementById("player2").style.backgroundColor = "white";
  let img = document.createElement("img");
  var source1 = document.getElementById("dice");

  $("button#roll").click(function() {
    let roll = random();
    if(roll === 1) {
      myPigDice.turnScore = 0;
      myPigDice.displayTurnScore();
      if(myPigDice.playerTurn) {
        img.src = "image/1.PNG";
        source1.appendChild(img);
        source1.style.backgroundColor = "lightblue";
        document.getElementById("player1").style.backgroundColor = "white";
        document.getElementById("player2").style.backgroundColor = "lightcoral";
      }
      else {
        img.src = "image/12.PNG";
        source1.appendChild(img);
        source1.style.backgroundColor = "lightcoral";
        document.getElementById("player1").style.backgroundColor = "lightblue";
        document.getElementById("player2").style.backgroundColor = "white";
      }
      myPigDice.playerTurn = !myPigDice.playerTurn;
    }
    else {
      if(roll === 2) {
        img.src = "image/2.PNG";
      }
      if(roll === 3) {
        img.src = "image/3.PNG";
      }
      if(roll === 4) {
        img.src = "image/4.PNG";
      }
      if(roll === 5) {
        img.src = "image/5.PNG";
      }
      if(roll === 6) {
        img.src = "image/6.PNG";
      }
      source1.appendChild(img);
      if(myPigDice.playerTurn) {
        source1.style.backgroundColor = "lightblue";
      }
      else {
        source1.style.backgroundColor = "lightcoral";
      }
      myPigDice.turnScore += roll;
      myPigDice.displayTurnScore();
    }
  });

  $("button#hold").click(function() {
    if(myPigDice.playerTurn) { 
      myPigDice.player1Score += myPigDice.turnScore;
      if(myPigDice.player1Score >= 30) {
        img.src = "image/win1.PNG";
        source1.appendChild(img);
        document.getElementById("player1").style.backgroundColor = "white";
        document.getElementById("roll").disabled = true;
        document.getElementById("hold").disabled = true;
      }
      else{
        img.src = "image/p2.PNG";
        source1.appendChild(img);
        source1.style.backgroundColor = "lightcoral";
        document.getElementById("player1").style.backgroundColor = "white";
        document.getElementById("player2").style.backgroundColor = "lightcoral";
      }
      myPigDice.turnScore=0;
      myPigDice.displayTotalScores();
      myPigDice.displayTurnScore(); 
      myPigDice.playerTurn = !myPigDice.playerTurn;

    }
    else {
      myPigDice.player2Score += myPigDice.turnScore;
      if(myPigDice.player2Score >= 30) {
        img.src = "image/win2.PNG";
        source1.appendChild(img);
        document.getElementById("player2").style.backgroundColor = "white";
        document.getElementById("roll").disabled = true;
        document.getElementById("hold").disabled = true;
      }
      else{
        img.src = "image/p1.PNG";
        source1.appendChild(img);
        source1.style.backgroundColor = "lightblue";
        document.getElementById("player1").style.backgroundColor = "lightblue";
        document.getElementById("player2").style.backgroundColor = "white";
      }
      myPigDice.turnScore=0;
      myPigDice.displayTotalScores();
      myPigDice.displayTurnScore(); 
      myPigDice.playerTurn = !myPigDice.playerTurn;
    }
  });

  $("button#newGame").click(function() {
    myPigDice.newGame();
    img.src = "image/new.PNG";
    source1.appendChild(img);
    document.getElementById("player1").style.backgroundColor = "lightblue";
    document.getElementById("player2").style.backgroundColor = "white";
    source1.style.backgroundColor = "white";
    document.getElementById("roll").disabled = false;
    document.getElementById("hold").disabled = false;
  });
});