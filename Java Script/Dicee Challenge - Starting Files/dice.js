var x = Math.floor(Math.random() * 6) + 1;

var source1 = "images/dice" + x + ".png";

document.querySelectorAll("img")[0].setAttribute("src",source1);

var y = Math.floor(Math.random() * 6) + 1;

var source2 = "images/dice" + y + ".png";

document.querySelectorAll("img")[1].setAttribute("src", source2);

if(x > y)
document.querySelector("h1").textContent = "🚩 Player 1 wins";

else if(x < y)
document.querySelector("h1").textContent = "🚩 Player 2 wins";

else if(x == y)
document.querySelector("h1").textContent = "Draw";