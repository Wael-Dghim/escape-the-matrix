$("#yes").on("click", function (e) {
  e.preventDefault();
  $("#container").hide();
  $("#choice").show();
  $("#question").text("Choose wisely");
});

$("#no").on("click", function (e) {
  e.preventDefault();
  alert("You don't really have a choice!");
  window.localStorage.setItem("digits", 4);
  window.localStorage.setItem("attempts", 5);
  window.location.replace("http://127.0.0.1:5500/game.html");
});

$("#enter").click(function (e) {
  //   e.preventDefault();
  console.log($("#difficulty").val());
  switch ($("#difficulty").val()) {
    case "easy":
      window.localStorage.setItem("digits", 2);
      window.localStorage.setItem("attempts", 10);
      break;
    case "mid":
      window.localStorage.setItem("digits", 3);
      window.localStorage.setItem("attempts", 7);
      break;
    case "hard":
      window.localStorage.setItem("digits", 4);
      window.localStorage.setItem("attempts", 5);
      break;
    default:
      window.localStorage.setItem("digits", 3);
      window.localStorage.setItem("attempts", 7);
      break;
  }
  window.location.replace("http://127.0.0.1:5500/game.html");
});
