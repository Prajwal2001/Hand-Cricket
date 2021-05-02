var tossOver = 0;
var toss;
document.querySelector(".heads").addEventListener("click", function () {
  if (tossOver === 0) {
    toss = 1;
    tossDisplay();
    tossOver = 1;
  } else alert("Can only be tossed once");
});
document.querySelector(".tails").addEventListener("click", function () {
  if (tossOver === 0) {
    toss = 0;
    tossDisplay();
    tossOver = 1;
  } else alert("Can only be tossed once");
});
function tossDisplay() {
  var i = Math.round(Math.random());
  if (i === toss) {
    document.querySelector(".content").innerHTML = "You Won The Toss";
    optionsDisplay();
  }
  else {
    document.querySelector(".content").innerHTML = "You Lost The Toss";
    tossResult();
  }
}
