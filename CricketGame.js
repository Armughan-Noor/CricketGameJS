//Core code for Live cricket match
var teamA = prompt("Please enter team 1 name ", "Pitch Burners");
var teamB = prompt("Please enter team 2 name ", "Thunder Eagles");
var numberOfOvers = parseInt(
  prompt("Please enter the number of overs for the cricket match. ", 5)
);
var tossWinner;
var tossLosser;
var teamScoreA = 0;
var teamOutA = 0;
var teamScoreB = 0;
var teamOutB = 0;
var innings = 0;
var target = 0;
var victory = false;
var playersNameA = ["Salman", "Moon", "Noor", "Anas R", "Wassay", "Ameer"];
var playersScoreA = [0, 0, 0, 0, 0, 0];
var scoreArrayIndex = 0;
var playersNameA = ["Ejaz", "Ahmad", "Anas A", "Daniyal", "Umair", "Mifta"];
var playersScoreB = [];
var playerTracker = 1;
var playerScore1 = 0;
var playerScore2 = 0;

// Function to delay execution
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function delayInnings2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to display match details
async function displayMatchDetailsInningsOne() {
  document.write(
    "The match is between " + teamA + " and " + teamB + "<br><br>"
  );
  await delay(1000);

  document.write(
    "It's time for the toss between " + teamA + " and " + teamB + "<br><br>"
  );
  await delay(2000);
  //Implementation for Toss
  if (Math.floor(Math.random() * 2 + 0) === 0) {
    document.write(teamA + " is going to bat" + "<br><br>");
    await delay(1000);
    tossWinner = teamA;
    tossLosser = teamB;
  } else {
    document.write(teamB + " is going to bat" + "<br><br>");
    await delay(1000);
    tossWinner = teamB;
    tossLosser = teamA;
  }
  document.write(
    numberOfOvers +
      " over match started, " +
      tossWinner +
      " is to bat." +
      "<br><br>"
  );
  await delay(2000);
  //Core implementation for Each over and each ball
  var delayTime = 1000;
  for (var i = 1; i <= numberOfOvers; i++) {
    document.write(
      "<b>Over number </b>" + i + " <b>started.</b>" + "<br><br>"
    );
    await delay(delayTime);
    //implementation for each ball of the over
    for (var j = 1; j <= 6; j++) {
      var resultPerBall = Math.floor(Math.random() * 7 + 0);

      //implementation for score on each ball
      if (resultPerBall == 0) {
        teamOutA += 1;
        document.write("Ohhh it's <b>outtt!!!!</b>" + "<br>");
        await delay(delayTime);
      } else if (resultPerBall == 1) {
        teamScoreA += 1;
        document.write("It's a single " + "<br>");
        await delay(delayTime);
      } else if (resultPerBall == 2) {
        teamScoreA += 2;
        document.write("it's a double " + "<br>");
        await delay(delayTime);
      } else if (resultPerBall == 3) {
        teamScoreA += 3;
        document.write("it's 3 runs " + "<br>");
        await delay(delayTime);
      } else if (resultPerBall == 4) {
        teamScoreA += 4;
        document.write("Extraordinary shot!!! <b>it's a 4</b> " + "<br>");
        await delay(delayTime);
      } else if (resultPerBall == 5) {
        teamScoreA += 5;
        document.write("Brilliant, it's 5 runs " + "<br>");
        await delay(delayTime);
      } else if (resultPerBall == 6) {
        teamScoreA += 6;
        document.write("Master class!!! <b>it's a 6</b> " + "<br>");
        await delay(delayTime);
      }
    }

    document.write(
      "<br>" +
        tossWinner +
        " = " +
        teamScoreA +
        "/" +
        teamOutA +
        " Overs: " +
        i +
        "<br>"
    );
  }
  target = teamScoreA + 1;
}
// Function to display match details
async function displayMatchDetailsInningsTwo() {
  document.write(
    "<br>" +
      tossLosser +
      " <b>needs </b>" +
      (teamScoreA + 1) +
      " <b>runs to win.</b><br><br>"
  );
  await delayInnings2(2000);

  var delayTime = 1000;
  for (var i = 1; i <= numberOfOvers; i++) {
    document.write(
      "<b>Over number </b>" + i + " <b>started.</b>" + "<br><br>"
    );
    await delayInnings2(delayTime);

    for (var j = 1; j <= 6; j++) {
      var resultPerBall = Math.floor(Math.random() * 7 + 0);

      if (resultPerBall == 0) {
        teamOutB += 1;
        document.write("Ohhh it's <b>outtt!!!!</b>" + "<br>");
        await delayInnings2(delayTime);
      } else if (resultPerBall == 1) {
        teamScoreB += 1;

        document.write("It's a single " + "<br>");
        await delayInnings2(delayTime);
      } else if (resultPerBall == 2) {
        teamScoreB += 2;
        document.write("it's a double " + "<br>");
        await delayInnings2(delayTime);
      } else if (resultPerBall == 3) {
        teamScoreB += 3;
        document.write("it's 3 runs " + "<br>");
        await delayInnings2(delayTime);
      } else if (resultPerBall == 4) {
        teamScoreB += 4;
        document.write("Extraordinary shot!!! <b>it's a 4</b> " + "<br>");
        await delayInnings2(delayTime);
      } else if (resultPerBall == 5) {
        teamScoreB += 5;
        document.write("Brilliant, it's 5 runs " + "<br>");
        await delayInnings2(delayTime);
      } else if (resultPerBall == 6) {
        teamScoreB += 6;
        document.write("Master class!!! <b>it's a 6</b> " + "<br>");
        await delayInnings2(delayTime);
      }
      if (teamScoreB >= target) {
        victory = true;
        break;
      }
    }
    document.write(
      "<br>" +
        tossLosser +
        " = " +
        teamScoreB +
        "/" +
        teamOutB +
        " Overs: " +
        i +
        "<br>"
    );
    if (!victory) {
      if (i == numberOfOvers) {
        document.write(
          tossLosser +
            " needs " +
            (target - teamScoreB) +
            " runs to win." +
            "<br>"
        );
      }
    } else {
      break;
    }
  }
  if (victory) {
    document.write(
      "<br>" +
        tossLosser +
        " <b>won by</b> " +
        (11 - teamOutB) +
        " <b>wickets</b><br>"
    );
    await delayInnings2(5000);
  } else {
    document.write(
      "<br>" +
        tossWinner +
        " <b>won by</b> " +
        (teamScoreA - teamScoreB) +
        " <b>runs</b><br>"
    );
    await delayInnings2(5000);
  }
}

displayMatchDetailsInningsOne().then(() => {
  console.log("Starting Innings two!!");
  displayMatchDetailsInningsTwo();
});

