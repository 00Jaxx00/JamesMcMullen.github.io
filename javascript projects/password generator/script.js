var passCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                      "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                      "a","b","c","d","e","f","g","h","i","j","k","l","m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z",
                      "!","@","#","$","%","^","&","*","(",")","|","?","~",
                      ".",",","<",">","","","+","-","_","{","}","[","]","/",
                      ":",";","1","2","3","4","5","6","7","8","9","0"];

var length = 20;

function generatePasscode(){

  var pcg = '';

  for (var i = 0; i < length; ++i) {
      pcg += passCharacters[Math.floor(Math.random() * passCharacters.length)];
   }

document.getElementById('result').value = pcg;

}
