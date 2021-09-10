
function diceRoll() {
  var rand1 = Math.round(Math.random()*5) + 1;

  document.getElementById('firstDice').src = "Dice_Images/Dice_" + rand1 + ".png";
};


function diceRoll2() {
  var rand2 = Math.round(Math.random()*5) + 1;

  document.getElementById('secondDice').src = "Dice_Images/Dice_" + rand2 + ".png";
};
