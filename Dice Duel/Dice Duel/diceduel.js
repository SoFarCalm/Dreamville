function Player (name, health){
  this.name = name;
  this.health = health;
}

//Enemy List//
var enemies = [
  {name: "Quickman", health: 25},
  {name: "Chupa", health: 35},
  {name: "Cloud", health: 50}
];

//Enemy Images//
var enemyImgs = [
  "images/enemy1.png",
  "images/enemy2.png",
  "images/enemy3.png"
];

//Creates A New Enemy//
var createEnemy = function enemyCreator(obj) {
  var newEnemy = {}
  for(var i in obj) {
    newEnemy[i] = obj[i];
  }
  return newEnemy;
}

//Grabs Enemy Image//
var createEnemyImage = function grabEnemyImg(imgsrc){
  var enemyImage = document.getElementById('enemy-img');
  enemyImage.src = imgsrc;
}

//Grab Current Enemy & Current Enemy Image//
var enemy = function grabCurrentEnemy(index){
  var grabEnemy = createEnemy(enemies[index]);
  var grabEnemyImg = createEnemyImage(enemyImgs[index]);
  return grabEnemy;
}

//Load Next Enemy//
function nextEnemy(){
  var enemyImage = document.getElementById('enemy-img');
  var enemyhealth = document.getElementById('enemyhealth');
  var combatBox = document.getElementById('combat');
  currentEnemyCounter++;
  currentEnemy = enemy(currentEnemyCounter);
  enemyhealth.innerHTML = currentEnemy.name + " </br> HP: " + currentEnemy.health;
  enemyImage.classList.remove('defeat');
  combatBox.value = "";
  btn.disabled = false;
}

//Load Beginning Characters//
var hero = new Player("Megaman", 95);
var currentEnemyCounter = 0;
var currentEnemy = enemy(currentEnemyCounter);

//Fighters Health//
function health(){
  var playerhealth = document.getElementById('playerhealth');
  var enemyhealth = document.getElementById('enemyhealth');
  playerhealth.innerHTML = hero.name + " </br> HP: " + hero.health;
  enemyhealth.innerHTML = currentEnemy.name + " </br> HP: " + currentEnemy.health;
}

var btn = document.getElementById('btn1');
btn.addEventListener("click", battle);

//Reset Game//
var resetbtn = document.getElementById('btn2');
resetbtn.addEventListener('click', function(){
  var combatBox = document.getElementById('combat');
  var enemyImg = document.getElementById('enemy-img');
  var playerImg = document.getElementById('player-img');
  currentEnemyCounter = 0;
  currentEnemy = enemy(currentEnemyCounter);
  hero.health = 95;
  playerhealth.innerHTML = hero.name + " </br> HP: " + hero.health;
  enemyhealth.innerHTML = currentEnemy.name + " </br> HP: " + currentEnemy.health;
  playerImg.classList.remove("defeat");
  enemyImg.classList.remove("defeat");
  btn.disabled = false;
  combatBox.value = "";
});

//Calculate Damage Done//
var damageDone = function calculateDmg(){
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);
  var totalDmg = dice1 + dice2;
  return totalDmg;
}

//Player Phase//
function playerTurn(){
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var damage = damageDone();

    combatTxt += hero.name + " deals " + damage + " damage to " + currentEnemy.name + "!";
    combatBox.value += combatTxt + "\n";
    currentEnemy.health -= damage;
    if(currentEnemy.health <= 0){
      currentEnemy.health = 0;
      enemyhealth.innerHTML = currentEnemy.name + " </br> HP: " + currentEnemy.health;
    } else {
    enemyhealth.innerHTML = currentEnemy.name + " </br> HP: " + currentEnemy.health;
  }
}

//Enemy Phase//
 function enemyTurn(){
    var enemyImg = document.getElementById('enemy-img');
    var playerImg = document.getElementById('player-img');
    var combatBox = document.getElementById('combat');
    var damage = damageDone();
    var combatTxt = "";

    if(currentEnemy.health <= 0){
      combatBox.value += "\n" + "Hooray! " + hero.name + " has defeated " + currentEnemy.name + "!";
      btn.disabled = true;
      enemyImg.classList.add("defeat");
      return setTimeout(nextEnemy, 3000);
    }
    combatTxt += currentEnemy.name + " hits " + hero.name + " for " + damage + "!";
    combatBox.value += combatTxt + "\n" + "\n";
    hero.health -= damage;
    if(hero.health <= 0){
      hero.health = 0;
      playerhealth.innerHTML = hero.name + " </br> HP: " + hero.health;
      combatBox.value += hero.name + " have been defeated by " + currentEnemy.name + "!";
      btn1.disabled = true;
      playerImg.classList.add('defeat');
      return;
    } else {
      playerhealth.innerHTML = hero.name + " </br> HP: " + hero.health;
  }
}

health();

function battle(){
  playerTurn();
  enemyTurn();
}
