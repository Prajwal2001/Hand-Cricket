var isTossOver = 0; //to determine whether toss is over or not (if 0 toss not done, 1 then toss is done)
var clickedHeadsOrTails; //to get what user has clicked (1 for heads 0 for tails)
var computersChoiceBatOrBowl; //if toss is lost by user then what is the choice of the computer (bat or bowl)
var tossResult;
// var battingFirst = 100;
localStorage.setItem("clickedHeadsOrTails",clickedHeadsOrTails);
localStorage.setItem("tossResult",tossResult);
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
    return "bowl";
  } else return "bat";
}
document.querySelector(".continue").addEventListener("click", function () {
  open("./index2.html","_parent");
})
// end of toss section
