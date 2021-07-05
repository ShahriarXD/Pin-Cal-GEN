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
      var pinGeneratorScreen2 = document.querySelectorAll("input")[1].value;
      var gg = parseInt(pinGeneratorScreen1)
      var gg1 = parseInt(pinGeneratorScreen2)
      console.log(gg);
      console.log(gg1);
      if (gg == gg1) {
        var gayeb = document.getElementById("RIGHT");
        gayeb.style.display = "block"
      } if (gg != gg1) {
        var choleayy = document.getElementById("WRONG");
        choleayy.style.display = "block"
      }
    })
  });
}
// ======================VERIFICATION AREA ENDS=========================