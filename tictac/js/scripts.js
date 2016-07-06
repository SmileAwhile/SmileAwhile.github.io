var teamSign;  // player X or O value
var board = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];  // initialize board
var AITeam;  // computer gets leftover X or O

// dialog function
var StartGame = function() {
  board = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];
  $( "#dialog-message" ).dialog({
    modal: true,
    buttons: {
      X: function() {  // pick X
        teamSign = "X";
        AITeam = "O";
        $(this).dialog("close");
      },
      O: function() { // pick O
        teamSign = "O";
        AITeam = "X";
        AITurn();
        $(this).dialog("close");
      }
    }
  });
};
StartGame();


// on cell click
// update cell with new value
// update board array with value
// check if player has won
// if not computer takes turn
// check if computer won
$("#0").on("click", function() {
  $(this).text(teamSign);
  board[0] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }

});
$("#1").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[1] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#2").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[2] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#3").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[3] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#4").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[4] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#5").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[5] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#6").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[6] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#7").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[7] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});
$("#8").on("click", function() {
  $(this).addClass("player");
  $(this).text(teamSign);
  board[8] = teamSign;
  if (!CheckWin()) {
      AITurn();
      CheckWin();
  }
});

// check if anyone has won  return true of someone has  false if not
var CheckWin = function() {
  // check if X won
  // first column equal
  if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
    XWins();
    return true;
  }
  // top left diagnal
  if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
    XWins();
    return true;
  }
  // top row
  if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
    XWins();
    return true;
  }
  // middle column
  if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
    XWins();
    return true;
  }
  // right column
  if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
    XWins();
    return true;
  }
  // middle row
  if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
    XWins();
    return true;
  }
  // bottom left diagnal
  if (board[6] == "X" && board[4] == "X" && board[2] == "X") {
    XWins();
    return true;
  }
  // bottom row
  if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
    XWins();
    return true;
  }

  // check if O won
  // first column equal
  if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
    OWins();
    return true;
  }
  // top left diagnal
  if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
    OWins();
    return true;
  }
  // top row
  if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
    OWins();
    return true;
  }
  // middle column
  if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
    OWins();
    return true;
  }
  // right column
  if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
    OWins();
    return true;
  }
  // middle row
  if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
    OWins();
    return true;
  }
  // bottom left diagnal
  if (board[6] == "O" && board[4] == "O" && board[2] == "O") {
    OWins();
    return true;
  }
  // bottom row
  if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
    OWins();
    return true;
  }

  // check if cat's game
  if (board[0] != "?" && board[1] != "?" && board[2] != "?" && board[3] != "?" && board[4] != "?" && board[5] != "?" && board[6] != "?" && board[7] != "?" && board[8] != "?" ) {
    CatsGame();
    return true;
  }

  return false;
};
// Xplayer wins
var XWins = function() {
  $("#dialog-message").html("<p>X Won Last Game!</p><p>Pick a side!</p>");  // update dialog
  $("h1").text("?");  // reset board
  $("h1").removeClass("player");
  StartGame();  // restart game
};

// Oplayer wins
var OWins = function() {
  $("#dialog-message").html("<p>O Won Last Game!</p><p>Pick a side!</p>");  // update dialog
  $("h1").text("?");  // reset board
  $("h1").removeClass("player");
  StartGame();  // restart game
};

// Cat's Game
var CatsGame = function() {
  $("#dialog-message").html("<p>Last Game was a Draw...</p><p>Pick a side!</p>");  // update dialog
  $("h1").text("?");  // reset board
  $("h1").removeClass("player");
  StartGame();  // restart game
};

// Computers turn
var AITurn = function() {
  // take middle if possible
  if (board[4] == "?") {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }

  // win if possible

  // win first column 1
  else if (board[0] == AITeam && board[3] == AITeam && board[6] == "?" ) {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }
  // win first column 2
  else if (board[0] == AITeam && board[6] == AITeam && board[3] == "?" ) {
    board[3] = AITeam;
    $("#3").text(AITeam);
  }
  // win first column 3
  else if (board[6] == AITeam && board[3] == AITeam && board[0] == "?" ) {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // win top left diagnal 1
  else if (board[0] == AITeam && board[4] == AITeam && board[8] == "?" ) {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // win top left diagnal 2
  else if (board[0] == AITeam && board[8] == AITeam && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // win top left diagnal 3
  else if (board[8] == AITeam && board[4] == AITeam && board[0] == "?" ) {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // win top row 1
  else if (board[0] == AITeam && board[1] == AITeam && board[2] == "?" ) {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // win top row 2
  else if (board[0] == AITeam && board[2] == AITeam && board[1] == "?" ) {
    board[1] = AITeam;
    $("#1").text(AITeam);
  }
  // win top row 3
  else if (board[2] == AITeam && board[1] == AITeam && board[0] == "?" ) {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // win middle column 1
  else if (board[1] == AITeam && board[4] == AITeam && board[7] == "?" ) {
    board[7] = AITeam;
    $("#7").text(AITeam);
  }
  // win middle column 2
  else if (board[1] == AITeam && board[7] == AITeam && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // win middle column 3
  else if (board[7] == AITeam && board[4] == AITeam && board[1] == "?" ) {
    board[1] = AITeam;
    $("#1").text(AITeam);
  }
  // win right column 1
  else if (board[2] == AITeam && board[5] == AITeam && board[8] == "?" ) {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // win right column 2
  else if (board[2] == AITeam && board[8] == AITeam && board[5] == "?" ) {
    board[5] = AITeam;
    $("#5").text(AITeam);
  }
  // win right column 3
  else if (board[8] == AITeam && board[5] == AITeam && board[2] == "?" ) {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // win middle row 1
  else if (board[3] == AITeam && board[4] == AITeam && board[5] == "?" ) {
    board[5] = AITeam;
    $("#5").text(AITeam);
  }
  // win middle row 2
  else if (board[3] == AITeam && board[5] == AITeam && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // win middle row 3
  else if (board[5] == AITeam && board[4] == AITeam && board[3] == "?" ) {
    board[3] = AITeam;
    $("#3").text(AITeam);
  }
  // win bottom left diagnal 1
  else if (board[6] == AITeam && board[4] == AITeam && board[2] == "?" ) {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // win bottom left diagnal 2
  else if (board[6] == AITeam && board[2] == AITeam && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // win bottom left diagnal 3
  else if (board[2] == AITeam && board[4] == AITeam && board[6] == "?" ) {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }
  // win bottom row 1
  else if (board[6] == AITeam && board[7] == AITeam && board[8] == "?" ) {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // win bottom row 2
  else if (board[6] == AITeam && board[8] == AITeam && board[7] == "?" ) {
    board[7] = AITeam;
    $("#7").text(AITeam);
  }
  // win bottom row 3
  else if (board[8] == AITeam && board[7] == AITeam && board[6] == "?" ) {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }

  // block Player form winning

  // block first column 1
  else if (board[0] == teamSign && board[3] == teamSign && board[6] == "?" ) {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }
  // block first column 2
  else if (board[0] == teamSign && board[6] == teamSign && board[3] == "?" ) {
    board[3] = AITeam;
    $("#3").text(AITeam);
  }
  // block first column 3
  else if (board[6] == teamSign && board[3] == teamSign && board[0] == "?" ) {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // block top left diagnal 1
  else if (board[0] == teamSign && board[4] == teamSign && board[8] == "?" ) {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // block top left diagnal 2
  else if (board[0] == teamSign && board[8] == teamSign && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // block top left diagnal 3
  else if (board[8] == teamSign && board[4] == teamSign && board[0] == "?" ) {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // block top row 1
  else if (board[0] == teamSign && board[1] == teamSign && board[2] == "?" ) {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // block top row 2
  else if (board[0] == teamSign && board[2] == teamSign && board[1] == "?" ) {
    board[1] = AITeam;
    $("#1").text(AITeam);
  }
  // block top row 3
  else if (board[2] == teamSign && board[1] == teamSign && board[0] == "?" ) {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // block middle column 1
  else if (board[1] == teamSign && board[4] == teamSign && board[7] == "?" ) {
    board[7] = AITeam;
    $("#7").text(AITeam);
  }
  // block middle column 2
  else if (board[1] == teamSign && board[7] == teamSign && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // block middle column 3
  else if (board[7] == teamSign && board[4] == teamSign && board[1] == "?" ) {
    board[1] = AITeam;
    $("#1").text(AITeam);
  }
  // block right column 1
  else if (board[2] == teamSign && board[5] == teamSign && board[8] == "?" ) {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // block right column 2
  else if (board[2] == teamSign && board[8] == teamSign && board[5] == "?" ) {
    board[5] = AITeam;
    $("#5").text(AITeam);
  }
  // block right column 3
  else if (board[8] == teamSign && board[5] == teamSign && board[2] == "?" ) {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // block middle row 1
  else if (board[3] == teamSign && board[4] == teamSign && board[5] == "?" ) {
    board[5] = AITeam;
    $("#5").text(AITeam);
  }
  // block middle row 2
  else if (board[3] == teamSign && board[5] == teamSign && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // block middle row 3
  else if (board[5] == teamSign && board[4] == teamSign && board[3] == "?" ) {
    board[3] = AITeam;
    $("#3").text(AITeam);
  }
  // block bottom left diagnal 1
  else if (board[6] == teamSign && board[4] == teamSign && board[2] == "?" ) {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // block bottom left diagnal 2
  else if (board[6] == teamSign && board[2] == teamSign && board[4] == "?" ) {
    board[4] = AITeam;
    $("#4").text(AITeam);
  }
  // block bottom left diagnal 3
  else if (board[2] == teamSign && board[4] == teamSign && board[6] == "?" ) {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }
  // block bottom row 1
  else if (board[6] == teamSign && board[7] == teamSign && board[8] == "?" ) {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // block bottom row 2
  else if (board[6] == teamSign && board[8] == teamSign && board[7] == "?" ) {
    board[7] = AITeam;
    $("#7").text(AITeam);
  }
  // block bottom row 3
  else if (board[8] == teamSign && board[7] == teamSign && board[6] == "?" ) {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }

  // grab open spots

  // grab top left corner
  else if (board[0] == "?") {
    board[0] = AITeam;
    $("#0").text(AITeam);
  }
  // grab top right corner
  else if (board[2] == "?") {
    board[2] = AITeam;
    $("#2").text(AITeam);
  }
  // grab bottom left corner
  else if (board[6] == "?") {
    board[6] = AITeam;
    $("#6").text(AITeam);
  }
  // grab bottom right corner
  else if (board[8] == "?") {
    board[8] = AITeam;
    $("#8").text(AITeam);
  }
  // grab left
  else if (board[3] == "?") {
    board[3] = AITeam;
    $("#3").text(AITeam);
  }
  // grab top
  else if (board[1] == "?") {
    board[1] = AITeam;
    $("#1").text(AITeam);
  }
  // grab right
  else if (board[5] == "?") {
    board[5] = AITeam;
    $("#5").text(AITeam);
  }
  // grab bottom
  else if (board[7] == "?") {
    board[7] = AITeam;
    $("#7").text(AITeam);
  }

};
