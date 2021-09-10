/*
user inputs an Amount
click button
  - give button a function onClick for taking user input

calculates for each different currency.

output to the separate feilds
*/

/* document.getElementById("Dollar Input").addEventListener('input', function(e){

  var dollarAmount = document.getElementById("Dollar Input").value;
  var colombianPeso = (dollarAmount * 0.00027);
  var yen = (dollarAmount * 0.0096);
  var euro = (dollarAmount * 1.18);

  let usd = e.target.value;
  document.getElementById("Colombian_Peso").innerHTML = colombianPeso;

})

*/



function currencyOutput() {
  var dollarAmount = document.getElementById("Dollar Input").value;

  var colombianUsd = dollarAmount * 3636.00;
  document.getElementById("Colombian_Peso").innerHTML = colombianUsd;

  var euroUsd = dollarAmount * 0.84;
  document.getElementById("Euro").innerHTML = euroUsd;

  var yenUsd = dollarAmount * 104.47;
  document.getElementById("Yen").innerHTML = yenUsd;
}
