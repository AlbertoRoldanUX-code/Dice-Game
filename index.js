var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

if (performance.navigation.type === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

  if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    document.querySelector(".p1").textContent = "🚩 Player 1";
  } else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    document.querySelector(".p2").textContent = "Player 2 🚩";
  } else {
    document.querySelector("h1").textContent = "It's a Tie!";
  }
}



$(".cta").click(function() {
  window.location.reload();

});


function myFunction(x) {
  if (x.matches) { // If media query matches
    $(".dice").click(function() {
      window.location.reload();

    });
  }

}


var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
