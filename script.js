window.addEventListener("load", startGame);

// const rock = false;
// const paper = false;
// const scissors = false;





function startGame() {
  console.log("start");
  document.querySelector(".rock").addEventListener("click", showShakeRock);
  document.querySelector(".paper").addEventListener("click", showShakePaper);
  document.querySelector(".scissors").addEventListener("click", showShakeScissors);
}


function showShakePaper() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showPaper);
  console.log("animation");
  document.querySelector("#buttons").classList.add("disabled")
}
function showShakeRock() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showRock);
  console.log("animation");
  document.querySelector("#buttons").classList.add("disabled")
}

function showShakeScissors() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showScissors);
  console.log("animation");
  document.querySelector("#buttons").classList.add("disabled")
}

function showRock() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player1").classList.add("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");



  
  document.querySelector("#player2").classList.add("scissors");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("rock");

  document.querySelector("#win").classList.remove("hidden")

  document.querySelector(".rock").removeEventListener("click", showShakeRock);
  document.querySelector(".paper").removeEventListener("click", showShakePaper);
  document.querySelector(".scissors").removeEventListener("click", showShakeScissors);
  
  console.log("rock");
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}
function showPaper() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player1").classList.add("paper");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("scissors");

  document.querySelector("#player2").classList.add("scissors");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#lose").classList.remove("hidden")

  document.querySelector(".rock").removeEventListener("click", showShakeRock);
  document.querySelector(".paper").removeEventListener("click", showShakePaper);
  document.querySelector(".scissors").removeEventListener("click", showShakeScissors);

  console.log("paper");
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}

function showScissors() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player1").classList.add("scissors");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player2").classList.add("scissors");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#draw").classList.remove("hidden")

  document.querySelector(".rock").removeEventListener("click", showShakeRock);
  document.querySelector(".paper").removeEventListener("click", showShakePaper);
  document.querySelector(".scissors").removeEventListener("click", showShakeScissors);
  

  console.log("scissors");
  setTimeout(() => {
    window.location.reload();
  }, 2000);
};

// function showRandom(rndNumber) {
 
//   return Math.floor(Math.random() * rndNumber) + 1;
// };

// function restartGame() {
//   document.querySelector("#player1").classList.remove("paper");
//   document.querySelector("#player1").classList.remove("scissors");
// }
