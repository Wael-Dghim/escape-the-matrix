// var test = $(".red-pill")[0];
// $(test).css("opacity", "1");
var bluePills = 0;
var redPills = 0;
var correct = generateNumber();
console.log(correct);
var counter = 0;

$("#escape").click(function () {
  $(this).hide();
  $("#game").css("display", "flex");
  $("#first").focus();
});
function submitHandler(event) {
  event.preventDefault();

  var digits = window.localStorage.getItem("digits");
  var attempts = window.localStorage.getItem("attempts");

  var $inputs = $(".digit");
  var arr = [];
  for (var i = 0; i < $inputs.length; i++) {
    arr.push(Number($inputs[i].value));
  }
  if (counter < +attempts) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === correct[j]) {
          if (i === j) {
            redPills++;
          } else {
            bluePills++;
          }
        }
      }
    }
    counter++;
  } else {
    alert("Attempts exceeded");
    window.location.assign("../defeat.html");
  }
  console.log(counter);
  if (counter < +attempts) {
    if (redPills === 4) {
      window.location.assign("../victory.html");
    } else {
      for (var i = 0; i < bluePills; i++) {
        $($(".blue-pill")[i]).css("opacity", "1");
      }
      for (var i = 0; i < redPills; i++) {
        $($(".red-pill")[i]).css("opacity", "1");
      }
      console.log(bluePills, redPills);
      redPills = 0;
      bluePills = 0;
      alert("Wrong key! You have " + (+attempts - counter) + " attempts left.");
    }
  }
}

function generateNumber() {
  var random = Math.ceil(Math.random() * 8999) + 1000;
  var arr = [];
  for (var i = 0; i < 4; i++) {
    arr.unshift(random % 10);
    random = Math.floor(random / 10);
  }
  return arr;
}

$("#explanation").on("click", function (e) {
  e.preventDefault();
  alert(
    "In the Matrix, you have to guess the key correctly to escape. If a digit from the number you enter is existent but not in the correct position in the key, that counts as a blue pill. If a digit is correct and in the same position in the key, that counts as a red pill. The goal is to get 4 red pills to escape the Matrix and enter Paradise."
  );
});
