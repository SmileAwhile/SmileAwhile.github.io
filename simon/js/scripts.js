var greenSound = new Audio("../sounds/simonSound1.mp3");
var redSound = new Audio("../sounds/simonSound2.mp3");
var yellowSound = new Audio("../sounds/simonSound3.mp3");
var blueSound = new Audio("../sounds/simonSound4.mp3");
var winSound = new Audio("../sounds/fireworks.mp3");

var onOff = false;
var strictMode = false;
var gameOn = false;

var pattern = [];
var count = 0;
var c = 0;

// function to zero pad
function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

// game function
var StartGame = function() {

  pattern.push(Math.floor((Math.random() * 4) + 1));
  count++;
  $('.display h3').text(zeroPad(count, 2).slice(0,1) + " " + zeroPad(count, 2).slice(1));

  playForPlayer();

} // end StartGame() function

// function containing loop to play pattern
var playForPlayer = function() {
  var i = 0;

// loop to play pattern
  function playPattern() {
    setTimeout(function() {
      console.log("iteration");
        switch (pattern[i]) {
          case 1:
            setTimeout(function() {
              $("#GBTN").addClass("greenBtn");
              $("#GBTN").removeClass("greenBtnLit");
              i++;
            }, 500);
            $("#GBTN").addClass("greenBtnLit");
            $("#GBTN").removeClass("greenBtn");
            greenSound.play();
            break;
          case 2:
            setTimeout(function() {
              $("#RBTN").addClass("redBtn");
              $("#RBTN").removeClass("redBtnLit");
              i++;
            }, 500);
            $("#RBTN").addClass("redBtnLit");
            $("#RBTN").removeClass("redBtn");
            redSound.play();
            break;
          case 3:
            setTimeout(function() {
              $("#YBTN").addClass("yellowBtn");
              $("#YBTN").removeClass("yellowBtnLit");
              i++;
            }, 500);
            $("#YBTN").addClass("yellowBtnLit");
            $("#YBTN").removeClass("yellowBtn");
            yellowSound.play();
            break;
          case 4:
            setTimeout(function() {
              $("#BBTN").addClass("blueBtn");
              $("#BBTN").removeClass("blueBtnLit");
              i++;
            }, 500);
            $("#BBTN").addClass("blueBtnLit");
            $("#BBTN").removeClass("blueBtn");
            blueSound.play();
            break;
          default:
        } // end switch
        if ( i < pattern.length ) {
          playPattern();
        }
    }, 1000);

  }  // end playPattern() loop

  playPattern();

};  // end playForPlayer()


// check if player button pushes are accurate
var checkMatch = function(m) {
  if (m === pattern[c]) {
    c++;  // increment count of button pushes
    if (c > 19) {
      winSound.play();
      $("#GBTN").addClass("greenBtnLit");
      $("#GBTN").removeClass("greenBtn");
      $("#RBTN").addClass("redBtnLit");
      $("#RBTN").removeClass("redBtn");
      $("#YBTN").addClass("yellowBtnLit");
      $("#YBTN").removeClass("yellowBtn");
      $("#BBTN").addClass("blueBtnLit");
      $("#BBTN").removeClass("blueBtn");
    }
    else if (c > pattern.length - 1) {
      c = 0;  // reset count of button pushes
      StartGame();  // add more to pattern and play pattern
    }
  }
  else {
    c = 0;  // reset count of button pushes
    setTimeout(function() {
      $("#GBTN").addClass("greenBtn");
      $("#GBTN").removeClass("greenBtnLit");
      $("#RBTN").addClass("redBtn");
      $("#RBTN").removeClass("redBtnLit");
      $("#YBTN").addClass("yellowBtn");
      $("#YBTN").removeClass("yellowBtnLit");
      $("#BBTN").addClass("blueBtn");
      $("#BBTN").removeClass("blueBtnLit");
    }, 500);
    $("#GBTN").addClass("greenBtnLit");
    $("#GBTN").removeClass("greenBtn");
    $("#RBTN").addClass("redBtnLit");
    $("#RBTN").removeClass("redBtn");
    $("#YBTN").addClass("yellowBtnLit");
    $("#YBTN").removeClass("yellowBtn");
    $("#BBTN").addClass("blueBtnLit");
    $("#BBTN").removeClass("blueBtn");
    greenSound.play();
    redSound.play();
    yellowSound.play();
    blueSound.play();

    if (strictMode) {
      count = 0;
      c = 0;
      $(".display h3").text("- -");
      pattern = [];
      StartGame();
    }
    else {
      playForPlayer();  // replay for player
    }
  } // end if for not matching
}  // end checkMatch() function


  $("#GBTN").mousedown(function() {
    $(this).addClass("greenBtnLit");
    $(this).removeClass("greenBtn");
    greenSound.play();
  }).mouseup(function() {
    $(this).addClass("greenBtn");
    $(this).removeClass("greenBtnLit");
    checkMatch(1);
  });

  $("#RBTN").mousedown(function() {
    $(this).addClass("redBtnLit");
    $(this).removeClass("redBtn");
    redSound.play();
  }).mouseup(function() {
    $(this).addClass("redBtn");
    $(this).removeClass("redBtnLit");
    checkMatch(2);
  });

  $("#YBTN").mousedown(function() {
    $(this).addClass("yellowBtnLit");
    $(this).removeClass("yellowBtn");
    yellowSound.play();
  }).mouseup(function() {
    $(this).addClass("yellowBtn");
    $(this).removeClass("yellowBtnLit");
    checkMatch(3);
  });

  $("#BBTN").mousedown(function() {
    $(this).addClass("blueBtnLit");
    $(this).removeClass("blueBtn");
    blueSound.play();
  }).mouseup(function() {
    $(this).addClass("blueBtn");
    $(this).removeClass("blueBtnLit");
    checkMatch(4);
  });





$(".onOff").on("click", function() {
  if (!onOff) {
    $('.offToggled').removeClass("toggled");
    $('.onToggled').addClass("toggled");
    onOff = true;
    $(".display h3").text("- -");
  }
  else {
    $('.onToggled').removeClass("toggled");
    $('.offToggled').addClass("toggled");
    onOff = false;
    count = 0;
    c = 0;
    $(".display h3").text("");
    pattern = [];
    if (strictMode) {
      $('#LIGHT').addClass("strictLight");
      $('#LIGHT').removeClass("strictLightOn");
      strictMode = false;
    }
  }
});

$("#START").mousedown(function() {
  $(this).addClass("startBtnPushed");
  $(this).removeClass("startBtn");
}).mouseup(function() {
  $(this).addClass("startBtn");
  $(this).removeClass("startBtnPushed");
  if (onOff) {
    gameOn = true;
    count = 0;
    c = 0;
    pattern = [];
    StartGame();
  }
});
$("#STRICT").mousedown(function() {
  $(this).addClass("strictBtnPushed");
  $(this).removeClass("strictBtn");
}).mouseup(function() {
  $(this).addClass("strictBtn");
  $(this).removeClass("strictBtnPushed");
  if (onOff) {
    if (!strictMode) {
      $('#LIGHT').addClass("strictLightOn");
      $('#LIGHT').removeClass("strictLight");
      strictMode = true;
    }
    else {
      $('#LIGHT').addClass("strictLight");
      $('#LIGHT').removeClass("strictLightOn");
      strictMode = false;
    }
  }
});
