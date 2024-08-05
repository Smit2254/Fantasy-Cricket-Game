let playerList = [
  {
    name: "Virat Kohli",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Jasprit Bumrah",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Rohit Sharma",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Yuzvendra Chahal",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Mohammed Shami",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Suryakumar Yadav",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Prasidh Krishna",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Hardik Pandya",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Shikhar Dhawan",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Ravindra Jadeja",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Arshdeep Singh",
    playingRole: "Bowler",
    credit: 6,
  },
  {
    name: "Ravichandran Ashwin",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Deepak Chahar",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Ruturaj Gaikwad",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Deepak Hooda",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ishan Kishan",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Shreyas Iyer",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Venkatesh Iyer",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Dinesh Karthik",
    playingRole: "Wicketkeeper",
    credit: 11,
  },
  {
    name: "Kuldeep Yadav",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Bhuvneshwar Kumar",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Mohammed Siraj",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Devdutt Padikkal",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Rishabh Pant",
    playingRole: "Wicketkeeper",
    credit: 10,
  },
  {
    name: "Moeen Ali",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "James Anderson",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Jonny Bairstow",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Sam Billings",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Stuart Broad",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Rory Burns",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Jos Buttler",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Zak Crawley",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Sam Curran",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Tom Curran",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Chris Jordan",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Jack Leach",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Liam Livingstone",
    playingRole: "Batsman",
    credit: 12,
  },
  {
    name: "Reece Topley",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "David Willey",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Joe Root",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ben Stokes",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Pat Cummins",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Aaron Finch",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Cameron Green",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Josh Hazlewood",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Travis Head",
    playingRole: "Wicketkeeper",
    credit: 8,
  },
  {
    name: "Usman Khawaja",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Marnus Labuschagne",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Nathan Lyon",
    playingRole: "Bowler",
    credit: 9,
  },
];

function PlayersInfo(name, playingRole, credit, currentTeamName) {
  (this.name = name),
    (this.playingRole = playingRole),
    (this.credit = credit),
    (this.teamMemberOf = currentTeamName),
    (this.runs = 0),
    (this.fantasyPoints = 0),
    (this.bowling = false),
    (this.ballThrow = 0),
    (this.wicketTaken = 0),
    (this.bowled = false),
    (this.fours = 0),
    (this.sixes = 0),
    (this.dotBalls = 0),
    (this.ballPlayed = 0),
    (this.captain = false),
    (this.viceCaptain = false);
}

const tossWinnerScoreBoard = {
  runs: 0,
  wicket: 0,
  points: 0,
  over: 0,
};

const tossLoserScoreBoard = {
  runs: 0,
  wicket: 0,
  points: 0,
  over: 0,
};

let updateScoreBoard = function (prop, val) {
  this[prop] += val;
};

let tossWinnerTeamList = [];
let tossLoserTeamList = [];

let currentBattingTeamName;
let tossWinnerTeamName;
let tossLoserTeamName;
let currentTimeStampWithShotType = "";
let innigs = 0;

function teamNamesValidation(firstTeam, secondTeam) {
  if (firstTeam.toLowerCase() === secondTeam.toLowerCase()) {
    document.querySelector("#toss-coin #team-name-err").innerHTML =
      "Team name should be different from each other";
    return false;
  }
  document.querySelector("#toss-coin #team-name-err").innerHTML = "";
  return true;
}

function tossCoin(event) {
  event.preventDefault();

  let teamName1 = document.querySelector("#player-1-teamname").value;
  let teamName2 = document.querySelector("#player-2-teamname").value;

  let validation = teamNamesValidation(teamName1, teamName2);

  if (!validation) {
    return false;
  }

  const teamNames = [teamName1, teamName2];

  let randomNum = Math.floor(Math.random() * 2);

  document.querySelector("#winner-name").innerHTML =
    "WHOOOREEE!! <b>" +
    teamNames[randomNum].toUpperCase() +
    "</b> HAS WON THE TOSS!!!";

  currentBattingTeamName = teamNames[randomNum].toUpperCase();
  tossWinnerTeamName = teamNames[randomNum].toUpperCase();
  let secondTeamIndex = randomNum ? 0 : 1;
  tossLoserTeamName = teamNames[secondTeamIndex].toUpperCase();

  const tossBtnElm = document.querySelector('#toss-coin input[type="submit"]');
  tossBtnElm.disabled = true;
  tossBtnElm.classList.replace(`btn-primary`, `btn-secondary`);

  document.querySelector("#create-team").style.display = "block";
  document.querySelector("#create-team").value =
    teamNames[randomNum].toUpperCase() + ", Select your team players.";
}

function nextPageDisplayHandler(willDisableElm, willEnableElm) {
  willDisableElm.style.display = "none";
  willEnableElm.style.display = "block";
}

function buttonActiveHandler(playerType) {
  const playerSelectionButtons = document.querySelectorAll(
    "#player-selecting-buttons .button-52"
  );

  playerSelectionButtons.forEach((element) => {
    element.classList.remove("button-active");
  });

  const selectedElm = document.querySelector(`#${playerType}`);
  selectedElm.classList.add("button-active");
}

function getSpecificPlayer(playerType) {
  buttonActiveHandler(playerType);

  document.querySelector("#player-list").innerHTML = "";

  let isItSecondTeam = currentBattingTeamName === tossLoserTeamName;

  let filteredPlayerList;

  if (isItSecondTeam) {
    filteredPlayerList = playerList.filter((player) => {
      return (
        player.playingRole === playerType &&
        player.teamMemberOf !== tossWinnerTeamName
      );
    });
  } else {
    filteredPlayerList = playerList.filter((player) => {
      return player.playingRole === playerType;
    });
  }

  for (let key of filteredPlayerList) {
    document.querySelector(
      "#player-list"
    ).innerHTML += `<div class="card" style = "width: 18rem;" >
                    <div class="card-body">
                      <div class="card-content">
                        <h5 class="player-name">${key.name}</h5>
                        <p class="playing-role">${key.playingRole}</p>
                        <p class="credit-score">Credit Score: ${key.credit}</p>
                      </div>
                        <i class="bi ${
                          key.addedtoTeam
                            ? "bi-check2-circle"
                            : "bi-plus-circle"
                        }" onclick="addingPlayer('${key.name}','${
      key.playingRole
    }','${key.credit}',${key.addedtoTeam})"></i>
                    </div>
                </div>`;
  }
}

function loadDataforSelectingPlayer() {
  let elm1 = document.getElementById("toss-coin");
  let elm2 = document.getElementById("choose-players");

  nextPageDisplayHandler(elm1, elm2);

  document.querySelector(".five h1").innerHTML =
    currentBattingTeamName + " Choose your players";

  getSpecificPlayer("Batsman");
}

function updateCurrentTeamList(updatedTeamList) {
  let currentTeamList;

  if (currentBattingTeamName === tossWinnerTeamName) {
    currentTeamList = tossWinnerTeamList;
  } else {
    currentTeamList = tossLoserTeamList;
  }

  currentTeamList.length = 0;

  currentTeamList.push(...updatedTeamList);
}

function removePlayer(teamList, playerDetails) {
  let updatedPlayerList = teamList.filter(
    (player) => player.name !== playerDetails.name
  );

  updateCurrentTeamList(updatedPlayerList);
}

function addPlayer(teamList, playerDetails) {
  teamList.push(playerDetails);
}

function currentTeamListHandler() {
  let currentTeamList;

  if (currentBattingTeamName === tossWinnerTeamName) {
    currentTeamList = tossWinnerTeamList;
  } else {
    currentTeamList = tossLoserTeamList;
  }

  return currentTeamList;
}

function addingPlayer(playerName, playingRole, credit, addedtoTeam) {
  const playerObj = new PlayersInfo(
    playerName,
    playingRole,
    parseInt(credit),
    currentBattingTeamName
  );

  let currentTeamList = currentTeamListHandler();

  if (addedtoTeam) {
    removePlayer(currentTeamList, playerObj);
    toggleButton(playerName, playingRole); // toggle button for updating dom
    displayTeamPlayerCountingWithCredits();
    roundNumberStyleHandler(); // to show palyer counting
  } else {
    if (teamBuildingValidation(playingRole) && creditValidation(playerObj)) {
      addPlayer(currentTeamList, playerObj);
      toggleButton(playerName, playingRole); // toggle button for updating dom
      displayTeamPlayerCountingWithCredits(); // to show palyer counting
      roundNumberStyleHandler();
    }
  }

  console.log(tossWinnerTeamList, "tossWinner");
  console.log(tossLoserTeamList, "tossLoserTeamList");
}

function roundNumberStyleHandler() {
  let teamList = currentTeamListHandler();

  const { Batsman, Bowler, Wicketkeeper } = teamPlayerCounting(teamList);

  if (Batsman) {
    document.querySelector("#batsman-selected").style.display = "inline-block";
  } else {
    document.querySelector("#batsman-selected").style.display = "none";
  }

  if (Wicketkeeper) {
    document.querySelector("#wk-selected").style.display = "inline-block";
  } else {
    document.querySelector("#wk-selected").style.display = "none";
  }

  if (Bowler) {
    document.querySelector("#bowler-selected").style.display = "inline-block";
  } else {
    document.querySelector("#bowler-selected").style.display = "none";
  }
}

function creditValidation(playerDetails) {
  let teamList = currentTeamListHandler();
  let creditScores = countTeamCredits(teamList);

  totalUpcomingCreditScores = playerDetails.credit + creditScores;

  if (totalUpcomingCreditScores > 100) {
    document.querySelector(
      "#err-credits"
    ).innerHTML = `This player exceed 100 credit score limit. Please select player whose credit score is less than ${
      101 - creditScores
    }`;
    return false;
  } else {
    document.querySelector("#err-credits").innerHTML = "";
    return true;
  }
}

function toggleButton(playerName, playingRole) {
  playerList = playerList.map((player) => {
    if (player.name === playerName) {
      if (player.addedtoTeam) {
        player.teamMemberOf = false;
      } else {
        player.teamMemberOf = currentBattingTeamName;
      }
      player.addedtoTeam = !player.addedtoTeam;
      return player;
    } else return player;
  });

  getSpecificPlayer(playingRole);
}

function teamPlayerCounting(teamList) {
  const categoryWisePlayerCount = teamList.reduce(
    (playerCounting, currentPlayer) => {
      if (playerCounting[currentPlayer.playingRole]) {
        playerCounting[currentPlayer.playingRole] = ++playerCounting[
          currentPlayer.playingRole
        ];
      } else {
        playerCounting[currentPlayer.playingRole] = 1;
      }

      return playerCounting;
    },
    {}
  );

  return categoryWisePlayerCount;
}

function countTeamCredits(teamList) {
  let creditScores = teamList.reduce((sum, player) => {
    sum += player.credit;
    return sum;
  }, 0);

  return creditScores;
}

function displayTeamPlayerCountingWithCredits() {
  let teamList = currentTeamListHandler();

  const { Batsman, Bowler, Wicketkeeper } = teamPlayerCounting(teamList);

  document.querySelector("#batsman-selected").innerHTML = Batsman
    ? Batsman
    : "";
  document.querySelector("#bowler-selected").innerHTML = Bowler ? Bowler : "";
  document.querySelector("#wk-selected").innerHTML = Wicketkeeper
    ? Wicketkeeper
    : "";

  let creditScores = countTeamCredits(teamList);

  document.querySelector("#credit").innerHTML = creditScores
    ? creditScores
    : "";
}

function teamBuildingValidation(playingRole) {
  let teamList = currentTeamListHandler();

  if (teamList.length === 0) {
    return true;
  }

  const { Batsman, Bowler, Wicketkeeper } = teamPlayerCounting(teamList);

  if (playingRole === "Batsman") {
    if (Batsman === 5) {
      alert("Batsman should not be selected more than 5");
    }
    return Batsman !== 5;
  } else if (playingRole === "Bowler") {
    if (Bowler === 5) {
      alert("Bowler should not be selected more than 5");
    }
    return Bowler !== 5;
  } else if (playingRole === "Wicketkeeper") {
    if (Wicketkeeper === 1) {
      alert("wicketKeeper should not be selected more than 1");
    }
    return Wicketkeeper !== 1;
  }
}

function finalTeamBuildingValidation() {
  let teamList = currentTeamListHandler();

  const { Batsman, Bowler, Wicketkeeper } = teamPlayerCounting(teamList);

  if (!(Batsman === 5 && Bowler === 5 && Wicketkeeper === 1)) {
    document.querySelector("#err-teamCount").innerHTML =
      "Batsman/Bowler/Wicketkeeper should be select as 5/5/1";
    return false;
  } else {
    document.querySelector("#err-teamCount").innerHTML = "";
  }

  let captain = getCaptain(teamList, "captain");
  let viceCaptain = getCaptain(teamList, "viceCaptain");

  if (!(captain.length && viceCaptain.length)) {
    document.querySelector("#err-teamCount").innerHTML =
      "Captain/Vice captain should be selected from captain & viceCaptain section";
    return false;
  } else {
    document.querySelector("#err-teamCount").innerHTML = "";
  }

  return true;
}

function showingAllPlayerInTeams(teamList) {
  document.querySelector("#player-list").innerHTML = "";
  for (let key of teamList) {
    document.querySelector(
      "#player-list"
    ).innerHTML += `<div class="card" style = "width:80%; height:60px;" >
                    <div class="card-body">
                        <h5 class="player-name">${key.name}</h5>
                        <p class="playing-role">${key.playingRole}</p>
                        <p class="credit-score">Credit Score: ${key.credit}</p>
                        <button type="button" class="btn btn-primary" onclick="assignCaptaincy('${
                          key.name
                        }','captain')">${
      key.captain ? "Captain Selected" : "Select Captain"
    }</button>
                        <button type="button" class="btn btn-primary" onclick="assignCaptaincy('${
                          key.name
                        }','viceCaptain')">${
      key.viceCaptain ? "ViceCaptain Selected" : "Select ViceCaptain"
    }</button>
                    </div>
                </div>`;
  }
}

function getCaptain(teamList, key) {
  return (captaincy = teamList.filter((player) => player[key]));
}

function assignCaptaincy(name, captancyType) {
  let teamList = currentTeamListHandler();

  let alreadyAssignedCaptain = getCaptain(teamList, "captain");
  let alreadyAssignedViceCaptain = getCaptain(teamList, "viceCaptain");

  if (captancyType === "captain") {
    teamList = teamList.map((player) => {
      if (player.name === name) {
        if (!player.viceCaptain) {
          player.captain = !player.captain;
        } else {
          alert("you can't assign captain position to Vice-Captain");
        }
        return player;
      } else if (
        alreadyAssignedCaptain.length &&
        player.name === alreadyAssignedCaptain[0].name
      ) {
        player.captain = false;
      }
      return player;
    });
  } else {
    teamList = teamList.map((player) => {
      if (player.name === name) {
        if (!player.captain) {
          player.viceCaptain = !player.viceCaptain;
        } else {
          alert("you can't assign Vice captain position to Captain");
        }
        return player;
      } else if (
        alreadyAssignedViceCaptain.length &&
        player.name === alreadyAssignedViceCaptain[0].name
      ) {
        player.viceCaptain = false;
      }
      return player;
    });
  }

  // console.log(teamList, ' teamlist changin captaincy');

  updateCurrentTeamList(teamList);

  showingAllPlayerInTeams(teamList);
}

function summaryHandler() {
  let teamList = currentTeamListHandler();

  if (teamList.length >= 2) {
    buttonActiveHandler("summary");
    showingAllPlayerInTeams(teamList);
    document.querySelector("#err-teamCount").innerHTML = "";
  } else {
    document.querySelector("#err-teamCount").innerHTML =
      "To Assign Captain team should have atleast two player";
  }
}

function saveTeam() {
  let validation = finalTeamBuildingValidation();

  if (!validation) {
    return false;
  }

  const roundNumberElm = document.querySelectorAll(".round-number");
  roundNumberElm.forEach((element) => {
    element.style.display = "none";
  });

  if (currentBattingTeamName === tossWinnerTeamName) {
    currentBattingTeamName = tossLoserTeamName;
    document.querySelector("h1").innerHTML =
      currentBattingTeamName + " Choose your players";
    displayTeamPlayerCountingWithCredits();
    getSpecificPlayer("Batsman");
  } else {
    let elm1 = document.querySelector("#choose-players");
    let elm2 = document.querySelector("#rules");

    document.querySelector("#rules #match-team-title").innerHTML =
      tossWinnerTeamName + " VS " + tossLoserTeamName;

    nextPageDisplayHandler(elm1, elm2);
  }
}

function startMatch() {
  let elm1 = document.querySelector("#rules");
  let elm2 = document.querySelector("#live-match");

  currentBattingTeamName = tossWinnerTeamName;

  nextPageDisplayHandler(elm1, elm2);

  document.querySelector("#live-match #vs-heading").innerHTML =
    tossWinnerTeamName + " VS " + tossLoserTeamName;

  updateTeamName(tossWinnerTeamName, tossLoserTeamName);
  passingScoreHandler();
}

function updateTeamScore() {
  const runs = [1, 2, 3, 4, 6, "dot", "wicket"];

  let randomIndex = Math.floor(Math.random() * runs.length);

  let shotType = runs[randomIndex];

  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  currentTimeStampWithShotType = dateTime + " - " + shotType + "</br>";

  // fetch current batter and bowler
  let currentPlayer = currentPlayerHandler();

  const [currentBatsman, currentBowler] = [currentPlayer[0], currentPlayer[1]];

  let batterPoints;

  if (!currentBatsman.captain && !currentBatsman.viceCaptain) {
    batterPoints = 1;
  } else if (currentBatsman.viceCaptain) {
    batterPoints = 1.5;
  } else {
    batterPoints = 2;
  }

  switch (shotType) {
    case 1:
      batterPoints *= 1;
      break;
    case 2:
      batterPoints *= 2;
      break;
    case 3:
      batterPoints *= 3;
      break;
    case 4:
      batterPoints *= 5;
      break;
    case 6:
      batterPoints *= 8;
      break;
    default:
      break;
  }

  let bowlerPoints;

  if (!currentBowler.captain && !currentBowler.viceCaptain) {
    bowlerPoints = 1;
  } else if (currentBowler.viceCaptain) {
    bowlerPoints = 1.5;
  } else {
    bowlerPoints = 2;
  }

  let battingTeam =
    currentBattingTeamName === tossWinnerTeamName
      ? tossWinnerTeamList
      : tossLoserTeamList;
  let bowlingTeam =
    currentBattingTeamName === tossWinnerTeamName
      ? tossLoserTeamList
      : tossWinnerTeamList;

  battingTeam = battingTeam.map((player) => {
    if (player.name === currentBatsman.name) {
      if (!isNaN(shotType)) {
        player.runs += shotType;
        player.fantasyPoints += batterPoints;
        if (shotType === 4) {
          player.fours++;
        } else if (shotType === 6) {
          player.sixes++;
        }
      } else if (shotType === "dot") {
        player.dotBalls += 1;
      } else if (shotType === "wicket" && player.runs === 0) {
        player.bowled = true;
        player.fantasyPoints -= batterPoints * 2;
      } else {
        player.bowled = true;
      }

      player.ballPlayed++;
    }
    return player;
  });

  bowlingTeam = bowlingTeam.map((player) => {
    if (player.name === currentBowler.name) {
      if (shotType === "wicket") {
        player.fantasyPoint += bowlerPoints * 10;
        player.wicketTaken++;
      } else if (shotType === "dot") {
        player.fantasyPoint += bowlerPoints;
      }

      player.ballThrow++;

      if (player.ballThrow === 6) {
        player.bowling = true;
      }

      return player;
    }
    return player;
  });

  if (currentBattingTeamName === tossWinnerTeamName) {
    updateScoreBoardHandler(
      tossWinnerScoreBoard,
      tossLoserScoreBoard,
      shotType,
      batterPoints,
      bowlerPoints,
      currentBatsman.runs
    );
    if (shotType === "wicket" && tossWinnerScoreBoard.wicket === 10) {
      passingScoreHandler(true, currentPlayer);
      inningCheckingHandler();
      return false;
    }
  } else {
    updateScoreBoardHandler(
      tossLoserScoreBoard,
      tossWinnerScoreBoard,
      shotType,
      batterPoints,
      bowlerPoints,
      currentBatsman.runs
    );
    if (shotType === "wicket" && tossLoserScoreBoard.wicket === 10) {
      passingScoreHandler(true, currentPlayer);
      inningCheckingHandler();
      return false;
    }
  }

  if (currentBowler.ballThrow === 6) {
    passingScoreHandler(true, currentPlayer);

    let over = +document.querySelector("#bowling-team-score #team-over #over")
      .innerHTML;

    if (over === 5) {
      inningCheckingHandler();
      return false;
    }
  }

  passingScoreHandler();

  timerHandler(1);
}

function timerHandler(seconds) {
  document.querySelector("#hit").style.display = "none";
  document.querySelector("#hit-timer").style.display = "block";
  document.querySelector("#hit-timer").innerHTML = "Please Wait 1sec";
  var currentTime = new Date().getTime();

  // while (currentTime + miliseconds >= new Date().getTime()) {
  //     document.querySelector('#hit-timer').innerHTML = "Please wait " + currentSecond + "..... <i class='bi bi-clock-history'></i>"
  // }

  setTimeout(() => {
    document.querySelector("#hit").style.display = "block";
    document.querySelector("#hit-timer").style.display = "none";
  }, seconds * 1000);
}

function updateScoreBoardHandler(
  battingTeam,
  bowlingTeam,
  shotType,
  batterPoints,
  bowlerPoints,
  batsmanRuns
) {
  if (!isNaN(shotType)) {
    updateScoreBoard.call(battingTeam, "runs", shotType);
    updateScoreBoard.call(battingTeam, "points", batterPoints);
  } else if (shotType === "dot") {
    updateScoreBoard.call(bowlingTeam, "points", bowlerPoints);
  } else if (shotType === "wicket" && !batsmanRuns) {
    updateScoreBoard.call(battingTeam, "wicket", 1);
    updateScoreBoard.call(battingTeam, "points", batterPoints * -2);
    updateScoreBoard.call(bowlingTeam, "points", bowlerPoints * 10);
  } else {
    updateScoreBoard.call(battingTeam, "wicket", 1);
    updateScoreBoard.call(bowlingTeam, "points", bowlerPoints * 10);
  }

  let over = parseFloat(document.getElementById("over").innerHTML);

  let absVal = parseInt(over);

  over = over - absVal;

  if (over === 0 || over !== 0.5) {
    updateScoreBoard.call(bowlingTeam, "over", 0.1);
  } else {
    updateScoreBoard.call(bowlingTeam, "over", 0.5);
  }
}

function currentSessionCompleted(content, elmId) {
  if (content) {
    document.querySelector("#popup").style.display = "block";
    document.querySelector("#popup #text").innerHTML = content;
    document.querySelector(`#${elmId}`).style.filter = "blur(10px)";
  } else {
    document.querySelector(`#${elmId}`).style.filter = "none";
    document.querySelector("#popup").style.display = "none";
    document.querySelector("#bwl-details").innerHTML = "";
  }
}

function sessionHandler() {
  let id;

  let element = document.querySelector("#live-match");

  const value = window.getComputedStyle(element).getPropertyValue("display");

  if (value === "block") {
    id = "live-match";
  } else {
    id = "score-card";
  }

  currentSessionCompleted(false, id);
}

function inningCheckingHandler() {
  // document.querySelector("#bwl-details").innerHTML
  innigs++;
  if (innigs === 1) {
    currentSessionCompleted("To start 2nd inning press cotinue", "live-match");
    currentBattingTeamName = tossLoserTeamName;
    updateTeamName(tossLoserTeamName, tossWinnerTeamName);
    passingScoreHandler();
  } else {
    currentSessionCompleted(
      "Match is Over press continue to see score-card",
      "score-card"
    );
    let domE1 = document.querySelector("#live-match");
    let domE2 = document.querySelector("#score-card");
    nextPageDisplayHandler(domE1, domE2);
    showScoreCard();
  }
}

function showScoreCard() {
  showWinnerTeamName();

  renderScoreCardTable("winner");
  renderScoreCardTable("loser");
}

function showWinnerTeamName() {
  let pointDifference;
  let playerCount = 0;

  if (tossWinnerScoreBoard.points > tossLoserScoreBoard.points) {
    pointDifference = tossWinnerScoreBoard.points - tossLoserScoreBoard.points;

    document.querySelector("#winner-team-name").innerHTML =
      tossWinnerTeamName + " won by " + pointDifference + " points";
  } else {
    pointDifference = tossLoserScoreBoard.points - tossWinnerScoreBoard.points;

    document.querySelector("#winner-team-name").innerHTML =
      tossLoserTeamName + " won by " + pointDifference + " points";
  }
}

function renderScoreCardTable(teamType) {
  let teamName;
  let statics;
  let teamList;
  let points;
  let playerCount = 0;

  if (teamType === "winner") {
    teamName = tossWinnerTeamName;
    statics =
      tossWinnerScoreBoard.runs +
      " - " +
      tossWinnerScoreBoard.wicket +
      " (" +
      tossWinnerScoreBoard.over.toFixed(2) +
      ") ";
    teamList = tossWinnerTeamList;
    points = tossWinnerScoreBoard.points;
  } else {
    teamName = tossLoserTeamName;
    statics =
      tossLoserScoreBoard.runs +
      " - " +
      tossLoserScoreBoard.wicket +
      " (" +
      tossLoserScoreBoard.over.toFixed(2) +
      ") ";
    teamList = tossLoserTeamList;
    points = tossLoserScoreBoard.points;
  }
  document.querySelector(
    `#${teamType}-score-card #toss-${teamType}-innig`
  ).innerHTML = teamName;

  document.querySelector(
    `#${teamType}-score-card #run-wicket-over-statics`
  ).innerHTML = statics;

  for (let player of teamList) {
    playerCount++;

    if (player.bowled) {
      document.querySelector(
        `#${teamType}-score-card #player-scores`
      ).innerHTML += `
                <tr class="text-center" >
                        <th colspan="1">${playerCount}</th>
                        <th colspan="3">${player.name}  ${
        player.captain ? "(C)" : player.viceCaptain ? "(VC)" : ""
      }</th>
                        <th colspan="2">OUT</th>
                        <th colspan="1">${player.runs}</th>
                        <th colspan="1">${player.ballPlayed}</th>
                        <th colspan="1">${player.dotBalls}</th>
                        <th colspan="1">${player.fours}</th>
                        <th colspan="1">${player.sixes}</th>
                        <th colspan="1">${player.fantasyPoints}</th>
                </tr>
    `;
    } else {
      if (player.runs || player.dotBalls) {
        document.querySelector(
          `#${teamType}-score-card #player-scores`
        ).innerHTML += `
                <tr class="text-center" >
                    <th colspan="1">${playerCount}</th>
                    <th colspan="3">${player.name}  ${
          player.captain ? "(C)" : player.viceCaptain ? "(VC)" : ""
        }</th>
                    <th colspan="2">NOT OUT</th>
                    <th colspan="1">${player.runs}</th>
                    <th colspan="1">${player.ballPlayed}</th>
                    <th colspan="1">${player.dotBalls}</th>
                    <th colspan="1">${player.fours}</th>
                    <th colspan="1">${player.sixes}</th>
                    <th colspan="1">${player.fantasyPoints}</th>
                </tr>
    `;
      } else {
        document.querySelector(
          `#${teamType}-score-card #did-not-bat`
        ).innerHTML += player.name + " , ";
      }
    }
  }

  document.querySelector(`#${teamType}-score-card #total-points`).innerHTML =
    points;

  const bowlers = teamList.filter((player) => player.playingRole === "Bowler");

  playerCount = 0;

  for (let bowler of bowlers) {
    playerCount++;

    if (bowler.ballThrow) {
      console.log(
        document.querySelector(
          `#${teamType}-score-card #bowlers #bowler-scores`
        )
      );
      document.querySelector(
        `#${teamType}-score-card #bowler #bowlers-scores`
      ).innerHTML += `
            <tr class="text-center" >
                <th colspan="1">${playerCount}</th>
                <th colspan="3">${bowler.name}</th>
                <th colspan="2">${bowler.ballThrow}</th>
                <th colspan="1">${bowler.wicketTaken}</th>
            </tr>
            `;
    } else {
      document.querySelector(
        `#${teamType}-score-card #bowler #did-not-bowl`
      ).innerHTML += bowler.name + "   ";
    }
  }
}

function updateTeamName(battingTeamName, bowlingTeamName) {
  // Batting Section
  document.querySelector("#batting-team-score #name").innerHTML =
    battingTeamName + " - (BATTING)";

  // Bowling section
  document.querySelector("#bowling-team-score #name").innerHTML =
    bowlingTeamName + " - (BOWLING)";
}

function currentPlayerHandler() {
  let battingTeam =
    currentBattingTeamName === tossWinnerTeamName
      ? tossWinnerTeamList
      : tossLoserTeamList;
  let bowlingTeam =
    currentBattingTeamName === tossWinnerTeamName
      ? tossLoserTeamList
      : tossWinnerTeamList;

  let currentBatter = battingTeam.find((player) => !player.bowled);
  let currentBowler = bowlingTeam.find(
    (player) => player.playingRole === "Bowler" && !player.bowling
  );

  return [currentBatter, currentBowler];
}

function persistChangedPlayer(bowlerName) {
  let battingTeam =
    currentBattingTeamName === tossWinnerTeamName
      ? tossWinnerTeamList
      : tossLoserTeamList;
  let bowlingTeam =
    currentBattingTeamName === tossWinnerTeamName
      ? tossLoserTeamList
      : tossWinnerTeamList;

  let currentBatter = battingTeam.find((player) => !player.bowled);
  let currentBowler = bowlingTeam.find((player) => player.name === bowlerName);

  return [currentBatter, currentBowler];
}

function passingScoreHandler(playerChanged, willChagePlayer) {
  if (playerChanged) {
    var [currentBatsman, currentBowler] = willChagePlayer;
  } else {
    var [currentBatsman, currentBowler] = currentPlayerHandler();
  }

  const {
    name,
    runs,
    fantasyPoints,
    fours,
    sixes,
    captain: batsmanCaptain,
    viceCaptain: batsmanViceCaptain,
  } = currentBatsman;
  const {
    name: bName,
    wicketTaken,
    ballThrow,
    captain: bowlerCaptain,
    viceCaptain: bowlerViceCaptain,
  } = currentBowler;

  if (currentBattingTeamName === tossWinnerTeamName) {
    var currentBattingTeamScores = tossWinnerScoreBoard;
    var currentBowlingTeamScores = tossLoserScoreBoard;
  } else {
    var currentBattingTeamScores = tossLoserScoreBoard;
    var currentBowlingTeamScores = tossWinnerScoreBoard;
  }

  const { runs: teamRuns, wicket, points } = currentBattingTeamScores;
  const { points: bowlingPoints, over } = currentBowlingTeamScores;

  displayScoreHandler(
    teamRuns,
    points,
    wicket,
    name,
    runs,
    fantasyPoints,
    fours,
    sixes,
    batsmanCaptain,
    batsmanViceCaptain,
    over,
    bName,
    wicketTaken,
    ballThrow,
    bowlingPoints,
    bowlerCaptain,
    bowlerViceCaptain
  );
}

function displayScoreHandler(
  teamRuns,
  teamPoints,
  teamWickets,
  batterName,
  batterRuns,
  batterPoints,
  batterFours,
  batterSixes,
  batterCaptain,
  batterViceCaptain,
  over,
  bowlerName,
  bowlerWickets,
  ballThrow,
  bowlingPoints,
  bowlerCaptain,
  bowlerViceCaptain
) {
  // Batting section

  //team
  document.querySelector("#batting-team-score #runs").innerHTML = teamRuns;
  document.querySelector("#batting-team-score #points").innerHTML = teamPoints;
  document.querySelector("#batting-team-score #wickets").innerHTML =
    teamWickets;

  // Batter
  let batsmanPosition = "";
  if (batterCaptain) {
    batsmanPosition = " ( captain )";
  } else if (batterViceCaptain) {
    batsmanPosition = " ( vice captain )";
  }

  document.querySelector("#batter-name").innerHTML =
    batterName + batsmanPosition;
  document.querySelector("#batter-runs").innerHTML = batterRuns;
  document.querySelector("#batter-points").innerHTML = batterPoints;
  document.querySelector("#batter-fours").innerHTML = batterFours;
  document.querySelector("#batter-sixes").innerHTML = batterSixes;

  // Bowling section --------------------------

  // team
  document.querySelector("#bowling-team-score #team-over #over").innerHTML =
    over.toFixed(1);
  document.querySelector("#bowling-team-score #team-points #points").innerHTML =
    bowlingPoints;

  // Bowler

  let bowlerPosition = "";
  if (bowlerCaptain) {
    bowlerPosition = " ( captain )";
  } else if (bowlerViceCaptain) {
    bowlerPosition = " ( vice captain )";
  }

  let wicketTaken = "";

  if (bowlerWickets) {
    wicketTaken = " --> taken " + bowlerWickets + " wickets.";
  }

  document.querySelector("#bwl-wkt-stat").innerHTML =
    bowlerName + bowlerPosition + wicketTaken;

  let wholeNum = parseInt(over);

  let result = parseFloat((over - wholeNum).toFixed(1));

  if (result === 0.1) document.querySelector("#bwl-details").innerHTML = "";

  ballThrow &&
    (document.querySelector("#bwl-details").innerHTML +=
      " Ball " + ballThrow + " - " + currentTimeStampWithShotType);
}
