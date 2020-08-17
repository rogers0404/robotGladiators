/********************   Robot Gladiators ****************************/

/*******************   Variables here   *****************************/

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
 // Alert users that they are starting the round
 window.alert("Welcome to Robot Gladiators!");

 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
 enemyHealth-=playerAttack;

 // Log a resulting message to the console so we know that it worked.
 console.log(enemyName+ " Health => "+enemyHealth);

 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
 playerHealth-=enemyAttack;

 // Log a resulting message to the console so we know that it worked.
 console.log(playerName+ " Health => "+playerHealth);
};

//Anothe way
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

/********************************************************************/

/*******************   Functions here   *****************************/


/********************************************************************/

/**************************Execution ********************************/

// You can also log multiple values at once like this
console.log("Robot Name: "+playerName, 
            "// Points of Attack: "+playerAttack, 
            "// Points of health: "+playerHealth);

fight();







/********************************************************************/