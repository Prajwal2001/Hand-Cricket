var x = localStorage.getItem("tossResult");
var y = localStorage.getItem("clickedHeadsOrTails");
// alert(y);
var score = 0;
document.querySelector(".one").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-1.jpg>';
    oppoImage();
    score+= 1;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score); 
});
document.querySelector(".two").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-2.jpg>';
    oppoImage();
    score+= 2;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".three").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-3.jpg>';
    oppoImage();
    score+= 3;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".four").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-4.jpg>';
    oppoImage();
    score+= 4;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".five").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-5.jpg>';
    oppoImage();
    score+= 5;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".six").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-6.jpg>';
    oppoImage();
    score+= 6;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".seven").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-7.jpg>';
    oppoImage();
    score+= 7;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".eight").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-8.jpg>';
    oppoImage();
    score+= 8;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".nine").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-9.jpg>';
    oppoImage();
    score+= 9;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
document.querySelector(".ten").addEventListener("click",function () {
    document.querySelector(".yourscore").innerHTML = '<img src = Images/image-10.jpg>';
    oppoImage();
    score+= 10;
    document.querySelector(".scorecard").innerHTML = ("Score: " + score);
});
function oppoImage() {
    var i = Math.floor(Math.random() * 10 + 1);
    document.querySelector(".opponentscore").innerHTML = '<img src = "Images/image-' + i + '.jpg">';
}