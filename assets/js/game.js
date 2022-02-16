var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //let players know the round is starting
    window.alert("Welcome to Robot Gladiators!");
}

    //would you like to fight section
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");
 
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log (
        enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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

    var confirmSkip = true;
    //if yes (true), then leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        }
else {
    fight();
}
}
