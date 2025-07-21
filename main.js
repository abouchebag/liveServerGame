let rockImage;
let paperImage;
let scissorsImage;

let userInput = "";
let computerChoice = "";
let options = ["rock", "paper", "scissors"];
let result = "";

let victorySound;
let defeatSound;
let drawSound;

function preload() {
    rockImage = loadImage("images/rock.png");
    paperImage = loadImage("images/paper.png");
    scissorsImage = loadImage("images/scissors.png");
    
    victorySound = loadSound("sounds/victory.mp3");
    defeatSound = loadSound("sounds/defeat.mp3");
}

function setup() {
    createCanvas(500, 500);
    background(245, 245, 220);
    textSize(24);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(245, 245, 220);
    
    fill(255, 255, 255);
    rect(0, 10, 100, 100);
    rect(110, 10, 100, 100);
    rect(220, 10, 100, 100);
    
    image(rockImage, 0, 10, 100, 100);
    image(paperImage, 110, 10, 100, 100);
    image(scissorsImage, 220, 10, 100, 100);

    fill(0);
    text("You chose: " + userInput, width / 2, height / 2 - 40);
    text("Computer chose: " + computerChoice, width / 2, height / 2);
    text("Result: " + result, width / 2, height / 2 + 40);
}
function mouseClicked() {
    let chosenOption = "";

    if (mouseX >= 0 && mouseX < 100 && mouseY >= 10 && mouseY < 110) {
        chosenOption = "rock";
    } else if (mouseX >= 110 && mouseX < 210 && mouseY >= 10 && mouseY < 110) {
        chosenOption = "paper";
    } else if (mouseX >= 220 && mouseX < 320 && mouseY >= 10 && mouseY < 110) {
        chosenOption = "scissors";
    } else {
        userInput = "";
        computerChoice = "";
        result = "Click a choice!";
        return;
    }

    userInput = chosenOption;

    let randomIndex = floor(random(options.length));
    computerChoice = options[randomIndex];

    if (userInput === computerChoice) {
        result = "It's a Draw!";
        drawSound.play();
    } else if (
        (userInput === "rock" && computerChoice === "scissors") ||
        (userInput === "paper" && computerChoice === "rock") ||
        (userInput === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        victorySound.play();
    } else {
        result = "You Lose!";
        defeatSound.play();
    }
    if (result = "You Win!"); {
        
    }
}