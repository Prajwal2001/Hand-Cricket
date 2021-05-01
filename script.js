var i = document.querySelector(".btn1");
var j = document.querySelector(".btn2");
j.style.visibility = "hidden";
j.addEventListener("click",function() {open("index2.html")})
var a = 0;
i.addEventListener("click", function () {
  if (a === 0) {
    var x = Math.round(Math.random());
    j.style.visibility = "visible";
    if (x === 1)
      document.querySelector(".content").innerHTML = "You Won The Toss!";
    else 
    document.querySelector(".content").innerHTML = "You Lost the Toss!";
    a = 1;
  } else alert("Can only be tossed once");
});
