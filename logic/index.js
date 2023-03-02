// var test = $(".red-pill")[0];
// $(test).css("opacity", "1");
var bluePills = 0;
var redPills = 0;
var correct = generateNumber();
console.log(correct);

$("#escape").click(function () {
  var $red = $(".red-pill");
  $(this).hide();
  $("#game").css("display", "flex");
  $("#first").focus();
});
function submitHandler(event) {
  console.log("hh");
  event.preventDefault();

  var $inputs = $(".digit");
  var arr = [];
  for (var i = 0; i < $inputs.length; i++) {
    arr.push(Number($inputs[i].value));
  }

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
  if (redPills === 4) {
    alert("You won");
    $(".red-pill").css("opacity", "1");
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
    alert("try again");
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
