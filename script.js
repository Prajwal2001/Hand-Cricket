var tossOver = 0;
var toss;
document.querySelector(".heads").addEventListener("click", function () {
  if (tossOver === 0) {
    toss = 1;
    tossOver = 1;
    tossDisplay();
  } else alert("Can only be tossed once");
});
document.querySelector(".tails").addEventListener("click", function () {
  if (tossOver === 0) {
    toss = 0;
    tossOver = 1;
    tossDisplay();
  } else alert("Can only be tossed once");
});
function tossDisplay() {
  var i = Math.round(Math.random());
  if(i === toss)  {
    document.querySelector(".content").innerHTML = "You Won The Toss";
    document.querySelector(".BorB").style.display = "flex";
  }
  else {
    document.querySelector(".content").innerHTML = "You Lost The Toss";
    tossResult();
  }
  return;
}
function optionsDisplay() {
  return;
}
function tossResult() {
  return;
}
