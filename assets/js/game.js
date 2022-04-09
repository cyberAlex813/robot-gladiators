// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


//function to generate a random number value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};


//fight function
var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.Health > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    //if player skips turn, then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
    // if yes, leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playermoney" , playerInfo.money)
        break;
        }
        }
    
    
        //enemy health section
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
);
    //check enemey health
    if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
        
        //player reward for winning
        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // players health section
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );
    //check player health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        break;
    } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
    }
};
//function to start a new game
var startGame = function() {
    //rest plaer stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
        //pick new enemy
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);
        // if player is alive and not the last enemy left
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");
            //if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
        }
        }
    else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
    }
}
endGame();
};
//function to end the entire game
var endGame = function() {
    window.alert("the game has now ended. Let's see how you did!");

    //if player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert ("You've lost your robot in battle.");
    }
    
    //ask player if they wqant to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon");
    }
};

//shop function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

// use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
        playerInfo.refillHealth();
        break;
    case "UPGRADE":
    case "upgrade":
        playerInfo.upgradeAttack();
        break;
    case "LEAVE":
    case "leave":
    window.alert("Leaving the store.");

      // do nothing, so function will end
    break;
    default:
    window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
    shop();
    break;
}
};

// function to set name
var getPlayerName = function() {
    var name = "";
// ADD LOOP HERE WITH PROMPT AND CONDITION
while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
}
console.log("Your robot's name is " + name);
return name;
};


// game info/ variables
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
},
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading playe's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
}
};


var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]('attack')); 

//start first game when page loads
startGame();

