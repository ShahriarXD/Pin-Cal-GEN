// ======================PIN GENERATOR STARTS============================
var pinGenerator = document.getElementById("pinGenerator");
pinGenerator.addEventListener("click", function() {
  var pinNumber = Math.floor(Math.random() * 10000);
  var pinGeneratorScreen = document.querySelectorAll("input")[0];
  pinGeneratorScreen.value = pinNumber;
  var x2 = parseInt(pinNumber);
  console.log(x2);
})
// ======================PIN GENERATOR ENDS=============================

// ======================VERIFICATION AREA START========================
for (let x = 0; x < 12; x++) {
  document.querySelectorAll(".button")[x].addEventListener("click",function(){
  var ButtonText = this.innerHTML;
  var pinInputScreen = document.querySelectorAll("input")[1];
  var store = (pinInputScreen.value);
  var x1 = pinInputScreen.value += ButtonText;
    var x3 = parseInt(x1)
    console.log(x3);
    if (ButtonText == "C") {
      pinInputScreen.value = ""
    } else if (ButtonText == "&lt;") {
      pinInputScreen.value = store.slice(0, -1);
    } else {
      // BLANK
    }
    var SUBMIT = document.getElementById("submit-sucess")
    SUBMIT.addEventListener("click",function(){
      var pinGeneratorScreen1 = document.querySelectorAll("input")[0].value;
      console.log(pinGeneratorScreen1);
      if (pinGeneratorScreen1 == x3) {
        var gayeb = document.getElementById("RIGHT");
        gayeb.style.display = "block"
      } if (pinGeneratorScreen1 != x3) {
        var choleayy = document.getElementById("WRONG");
        choleayy.style.display = "block"
      }
      
    })
  });
}
// ======================VERIFICATION AREA ENDS=========================
