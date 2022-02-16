var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
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
    
    //subtract "playerAttack" from "enemyHealth" then the result to update the value in "enemyHealth"
    enemyHealth = enemyHealth - playerAttack;

    //log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if(enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
    }

    //subtract "enemyAttack" from "playerHealth" then use the result to update the "playerhealth"
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check player's health
    if (playerHealth <= 0) {
        window.alert (playerName + " has died!");
    }
    else {
        window.alert (playerName + " still has" + playerHealth + " health left.");
    }
};

fight();

