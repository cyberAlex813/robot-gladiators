// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//start fight function
var fight = function(enemyNames) {
    //let players know the round is starting
    window.alert("Welcome to Robot Gladiators!");

//would you like to fight section
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
    
    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    } else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log (
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert (playerName + "still has " + playerHealth + " health left.");
    }

    //if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");


    //if yes (true), then leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        }
    else {
    fight();
    }
} else {
    window.alert("You need to pick a valid option. Try agaian!");
}
};

//run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
