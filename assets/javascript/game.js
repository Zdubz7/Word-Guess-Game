// start hangman game! 
prompt('Click OK to play :)');

var answers; // Array of questions
var pickedQuestion; // picked Question
var character; // Selected character
var Myguess; // Mygeuss
var Storedguesses = []; // Stored geuss
var lives; // Lives
var track; // Track correct geusses
var Characterblanks; // Number of blanks in character '-'

// displays the number of wins and losses
var displayWins = 0; // displays Wins
var displayLosses = 0; // displays Losses

// Get elements
var showLives = document.getElementById("mylives");
var showQuestion = document.getElementById("question");
var helpBtn = document.getElementById("help");
var showClue = document.getElementById("clue");

window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];




  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };


  // Select Question
  var selectQues = function () {
    if (pickedQuestion === answers[0]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[1]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[2]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[3]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[4]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[5]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[6]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[7]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[8]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[9]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[10]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[11]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[12]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[13]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
    if (pickedQuestion === answers[14]) {
      questionName.innerHTML = "Help For The _ Will Be Displayed Below.";
    }
  };

  // Create geusses ul
  var result = function () {
    characterStopper = document.getElementById('stop');
    correct = document.createElement('ul');

    for (var i = 0; i < character.length; i++) {
      correct.setAttribute('id', 'my-character');
      Myguess = document.createElement('li');
      Myguess.setAttribute('class', 'guess');
      if (character[i] === "-") {
        Myguess.innerHTML = "-";
        Characterblanks = 1;
      } else {
        Myguess.innerHTML = "_";
      }
      Storedguesses.push(Myguess);
      characterStopper.appendChild(correct);
      correct.appendChild(Myguess);
    }
  };

  // Show lives 
  var display = function () {
    showLives.innerHTML = "YOU Still Have " + lives + " lives";
    if (lives < 1) {
      displayLosses++;
      showLives.innerHTML = "Sorry Better Luck Next Time!";
      document.getElementById("loss-tracker").innerHTML = displayLosses;
      console.log(" | losses" + displayLosses);
    }
    if (track === Storedguesses.length) {
      displayWins++;
      showLives.innerHTML = "YOU Have Guessed Correctly";
      document.getElementById("win-tracker").innerHTML = displayWins;
      console.log("wins: " + displayWins);
      }
  };




  // Animate Hangman
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  };


  // Hangman
  canvas = function () {

    myHangman = document.getElementById("hangman");
    context = myHangman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 4;
  };

  head = function () {
    myHangman = document.getElementById("hangman");
    context = myHangman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1
  ];


  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < character.length; i++) {
        if (character[i] === geuss) {
          Storedguesses[i].innerHTML = geuss;
          track++;
        }
      }
      var z = (character.indexOf(geuss));
      if (z === -1 & lives > 0) {
        lives -= 1;
        display();
        animate();
      } else {
        display();
      }
    };
  };


  // Play
  play = function () {
    answers = [
      ["gandalf",
        "aragorn",
        "frodo",
        "legolas",
        "sam",
        "pippin",
        "merry"],
      ["bilbo",
        "elrond",
        "saruman",
        "gollum",
        "gimli"],
      ["boromir",
        "rosie",
        "galadriel",
        "arwen",
        "sauron"
      ]
    ];

    pickedQuestion = answers[Math.floor(Math.random() * answers.length)];
    character = pickedQuestion[Math.floor(Math.random() * pickedQuestion.length)];
    character = character.replace(/\s/g, "-");
    console.log(character);
    buttons();

    Storedguesses = [];
    lives = 10;
    track = 0;
    Characterblanks = 0;
    displayWins = 0;
    displayLosses = 0;
    result();
    display();
    selectQues();
    canvas();
  };

  play();

  // Help

  help.onclick = function () {

    help = [
      ["The wizard who is the leader of the Fellowship of the Ring and the army of the West.",
        "THE True King of Gondor.",
        "The Ring Bearer of Salrons Ring.",
        "Sindarin Elf of the Woodland Realm and one of nine members of the Fellowship of the Ring.",
        "Frodo's best friend and sidekick.",
        "Merry's first cousin.",
        "Pippin's first cousin."
      ],
      ["He stole the ring from Gollum.",
        "The LORD of Rivendell.",
        "A wizard that betrays Gandalf and locks him at the top of a tower.",
        "His ALTERNATE name from the shire was Smeagol.",
        "He was the dwarf warrior in the fellowship of the ring."
      ],
      ["A main character who died in The Fellowship of The Ring by getting shot with arrows.",
        "The woman Sam got married to at the end of Return of The King.",
        "The witch that gave Sam the light of Eärendil's star",
        "The daughter of Elrond that married Aragorn.",
        "The forger of the one ring that would rule all other rings."
      ]
    ];

    var questionIndex = answers.indexOf(pickedQuestion);
    var helpIndex = pickedQuestion.indexOf(character);
    showClue.innerHTML = "Clue: - " + help[questionIndex][helpIndex];
  };



  // Reset

  document.getElementById('playagain').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    displayWins.innerHTML = 0;
    displayLosses.innerHTML = 0;
    context.clearRect(0, 0, 400, 400);
    play();
  };
};