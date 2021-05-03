var x = localStorage.getItem("tossResult");
var a = localStorage.getItem("x");
// alert(a);
var score = 0;
var computerValue = null;
document.querySelector(".one").addEventListener("click", function () {
  document.querySelector(".yourscore").innerHTML =
    "<img src = Images/image-1.jpg>";
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
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
  oppoImage();
  if (computerValue !== 10) {
    score += 10;
    showScore();
  } else {
    onGettingOut();
  }
});
function oppoImage() {
  var i = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".opponentscore").innerHTML =
    '<img src = "Images/image-' + i + '.jpg">';
  computerValue = i;
}
function onGettingOut() {
  document.querySelector(".out").style.display = "block";
  document.querySelector(".numbers").style.visibility = "hidden";
  document.querySelector("#nextinningscontinue").style.display = "block";
}
function showScore() {
  document.querySelector(".scorecard").innerHTML = "Score: " + score;
}
