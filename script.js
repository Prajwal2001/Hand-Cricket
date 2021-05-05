var isTossOver = 0; //to determine whether toss is over or not (if 0 toss not done, 1 then toss is done)
var clickedHeadsOrTails; //to get what user has clicked (1 for heads 0 for tails)
var computersChoiceBatOrBowl; //if toss is lost by user then what is the choice of the computer (bat or bowl)
var tossResult; //Tells whether toss result was heads or tails
var firstBatting;
var firstBowling;
var score = 0;
var computerValue;
var i = 0;
var bowlingValue;
var target = 0;
showScore();
// var battingFirst = 100;
document.querySelector(".heads").addEventListener("click", function () {
  clickedHeadsOrTails = 1;
  tossDisplay();
});
document.querySelector(".tails").addEventListener("click", function () {
  clickedHeadsOrTails = 0;
  tossDisplay();
});
function tossDisplay() {
  if (isTossOver === 0) {
    isTossOver = 1;
    tossResultDisplay();
  } else alert("Can only be tossed once");
}
function tossResultDisplay() {
  //function to display the result of the toss
  tossResult = Math.round(Math.random());
  if (tossResult === clickedHeadsOrTails) {
    document.querySelector(".content").innerHTML = "You Won The Toss";
    document.querySelector(".BorB").style.display = "flex";
  } else {
    document.querySelector(".content").innerHTML = "You Lost The Toss";
    document.querySelector(".LRcontent").innerHTML =
      "Computer has chose to " + lostResultContent();
    document.querySelector(".lostResult").style.display = "block";
  }
  return;
}
function lostResultContent() {
  //function to display computer's choice (bat or bowl)
  computersChoiceBatOrBowl = Math.round(Math.random());
  if (computersChoiceBatOrBowl === 0) {
    firstBatting = 1;
    return "bowl";
  } else {
    firstBatting = 0;
    return "bat";
  }
}
document.querySelector(".continue").addEventListener("click", function () {
  if (firstBatting === 1)
    document.querySelector(".batting").style.display = "block";
  else document.querySelector(".bowling").style.display = "block";
  document.querySelector(".toss").style.display = "none";
});
document.querySelector(".bat").addEventListener("click", function () {
  firstBatting = 1;
  document.querySelector(".batting").style.display = "block";
  document.querySelector(".toss").style.display = "none";
});
document.querySelector(".bowl").addEventListener("click", function () {
  firstBatting = 0;
  document.querySelector(".bowling").style.display = "block";
  document.querySelector(".toss").style.display = "none";
});

// end of toss section

computerValue = null;
document.querySelector(".one").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-1.jpg>";
  oppoImageBowling();
  if (computerValue !== 1) {
    score += 1;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".two").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-2.jpg>";
  oppoImageBowling();
  if (computerValue !== 2) {
    score += 2;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".three").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-3.jpg>";
  oppoImageBowling();
  if (computerValue !== 3) {
    score += 3;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".four").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-4.jpg>";
  oppoImageBowling();
  if (computerValue !== 4) {
    score += 4;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".five").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-5.jpg>";
  oppoImageBowling();
  if (computerValue !== 5) {
    score += 5;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".six").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-6.jpg>";
  oppoImageBowling();
  if (computerValue !== 6) {
    score += 6;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".seven").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-7.jpg>";
  oppoImageBowling();
  if (computerValue !== 7) {
    score += 7;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".eight").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-8.jpg>";
  oppoImageBowling();
  if (computerValue !== 8) {
    score += 8;
    showScore();
  } else {
    onGettingOut();
  }
});
document.querySelector(".nine").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-9.jpg>";
  oppoImageBowling();
  if (computerValue !== 9) {
    score += 9;
    showScore();
  } else {
    onGettingOut();
  }
});

document.querySelector(".ten").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-10.jpg>";
  oppoImageBowling();
  if (computerValue !== 10) {
    score += 10;
    showScore();
  } else {
    onGettingOut();
  }
});

function oppoImageBowling() {
  var i = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".opponentscore").innerHTML =
    '<img src = "Images/image-' + i + '.jpg">';
  computerValue = i;
}

function onGettingOut() {
  document.querySelector(".out").style.display = "block";
  document.querySelector(".numbers").style.display = "none";
  if (firstBatting == 1) {
    document.querySelector("#nextinningscontinue").style.display = "inline-block";
    target = score + 1;
    document.querySelector("#nextinningscontinue").addEventListener("click", function() {
      document.querySelector(".batting").style.display = "none";
      document.querySelector(".bowling").style.display = "block";
      document.querySelector(".target").innerHTML = "Target: " + target;
      document.querySelector(".target").style.display = "block";
  });
  score = 0;
}
}

function showScore() {
  document.querySelector(".scorecard").innerHTML = "Score: " + score;
}

// End of batting

showScoreBowling();
document.getElementById("one").addEventListener("click", function () {
  bowlingValue = 1;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-1.jpg>";
  oppoImageBatting();
});
document.getElementById("two").addEventListener("click", function () {
  bowlingValue = 2;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-2.jpg>";
  oppoImageBatting();
});
document.getElementById("three").addEventListener("click", function () {
  bowlingValue = 3;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-3.jpg>";
  oppoImageBatting();
});
document.getElementById("four").addEventListener("click", function () {
  bowlingValue = 4;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-4.jpg>";
  oppoImageBatting();
});
document.getElementById("five").addEventListener("click", function () {
  bowlingValue = 5;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-5.jpg>";
  oppoImageBatting();
});
document.getElementById("six").addEventListener("click", function () {
  bowlingValue = 6;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-6.jpg>";
  oppoImageBatting();
});
document.getElementById("seven").addEventListener("click", function () {
  bowlingValue = 7;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-7.jpg>";
  oppoImageBatting();
});
document.getElementById("eight").addEventListener("click", function () {
  bowlingValue = 8;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-8.jpg>";
  oppoImageBatting();
});
document.getElementById("nine").addEventListener("click", function () {
  bowlingValue = 9;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-9.jpg>";
  oppoImageBatting();
});
document.getElementById("ten").addEventListener("click", function () {
  bowlingValue = 10;
  document.querySelector("#yourscore").innerHTML =
    "<img src = Images/image-10.jpg>";
  oppoImageBatting();
});

function oppoImageBatting() {
  i = Math.floor(Math.random() * 10 + 1);
  document.querySelector("#opponentscore").innerHTML =
    '<img src = "Images/image-' + i + '.jpg">';
  if (i == bowlingValue) onTakingWicket();
  else {
    score += i;
    showScoreBowling();
  }
}

function onTakingWicket() {
  document.querySelector("#out").style.display = "block";
  document.querySelector("#numbers").style.display = "none";
  if (firstBatting == 0) {
    document.querySelector(".continueBowling").style.display = "inline-block";
    target = score + 1;
    document.querySelector(".continueBowling").addEventListener("click", function() {
      document.querySelector(".batting").style.display = "block";
      document.querySelector(".bowling").style.display = "none";
      document.querySelector("#target").innerHTML = "Target: " + target;
      document.querySelector("#target").style.display = "block";
    });
  }
  score = 0;
}

function showScoreBowling() {
  document.querySelector("#scorecard").innerHTML = "Score: " + score;
}

