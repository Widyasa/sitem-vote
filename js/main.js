import ScoreboardView from "./Scoreboard/ScoreboardView.js";

let scoreOne = 0;
let scoreTwo = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Player One", "Player Two",(player, direction)=>
{
    //update scores
  const difference = direction === "minus" ? -1 : 1;

  if (player === "one"){
      scoreOne = Math.max(scoreOne + difference, 0);
  } else {
      scoreTwo = Math.max(scoreTwo + difference, 0);
  }
  view.update(scoreOne, scoreTwo);
});
