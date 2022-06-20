//Refacturing 

const p1 = {
  score: 0,
  name: 'player 1',
  button: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1Display")
}
const p2 = {
  score: 0,
  name: 'player 2',
  button: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const list = document.querySelector("#scoreBoard");
let winningScore = 5;
let isWinner = false;

function updateScores(player, opponent){
  if (!isWinner) {
    player.score += 1
    if (player.score === winningScore) {
      isWinner = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.innerHTML = player.score;
  }  
  trackWinner()
}

function trackWinner() {
  const newLi = document.createElement('li');
   if(p1.score === winningScore){
    newLi.append(p1.name)
   } else if (p2.score === winningScore){
    newLi.append(p2.name)
   }
    list.append(newLi);

}


p1.button.addEventListener("click", () => {
  updateScores(p1, p2)
});
p2.button.addEventListener("click", () => {
 updateScores(p2, p1)
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = Number(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isWinner = false;
  for(let p of [p1, p2]){
    p.score = 0;
    p.display.innerHTML = 0;
    p.display.classList.remove("winner", "loser");
    p.button.disabled = false;
  }
  list.innerHTML = '';
}
