


function Player (name, health){
  this.name = name;
  this.health = health;
}

//Enemy List//
var enemies = [
  {name: "Quickman", health: 25, image: "images/quickman1.png", icon: "images/quickman2.png"},
  {name: "Heatman", health: 35, image: "images/heatman1.png", icon: "images/heatman2.png"},
  {name: "Skullman", health: 50, image: "images/skullman1.png", icon: "images/skullman2.png"}
];

//Creates A New Enemy//
var createEnemy = function(obj) {
  var newEnemy = {}
  for(var i in obj) {
    newEnemy[i] = obj[i];
  }
  return newEnemy;
}

//Grabs Enemy Image//
var createEnemyImage = function(imgsrc, iconsrc){
  var enemyImage = document.getElementById('enemy-img');
  var enemyIcon = document.getElementById('enemyicon')
  enemyImage.src = imgsrc;
  enemyIcon.src = iconsrc;
}

//Grab Current Enemy & Current Enemy Image//
var enemy = function(index){
  var grabEnemy = createEnemy(enemies[index]);
  var grabEnemyImg = createEnemyImage(enemies[index].image, enemies[index].icon);
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

//Attack Button//
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
  combatBox.innerHTML = "";
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
    var megaman = hero.name.bold();
    var robotmaster = currentEnemy.name.bold();
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var damage = damageDone();

    combatTxt += megaman + " deals " + damage + " damage to " + robotmaster + "!";
    combatBox.innerHTML += combatTxt.fontcolor("blue") + "</br>";
    combatBox.scrollTop = combatBox.scrollHeight;
    currentEnemy.health -= damage;
    if(currentEnemy.health <= 0){
      currentEnemy.health = 0;
      enemyhealth.innerHTML = robotmaster + " </br> HP: " + currentEnemy.health;
    } else {
    enemyhealth.innerHTML = robotmaster + " </br> HP: " + currentEnemy.health;
  }
}

//Enemy Phase//
 function enemyTurn(){
    var enemyImg = document.getElementById('enemy-img');
    var playerImg = document.getElementById('player-img');
    var combatBox = document.getElementById('combat');
    var megaman = hero.name.bold();
    var robotmaster = currentEnemy.name.bold();
    var damage = damageDone();
    var combatTxt = "";

    if(currentEnemy.health <= 0){
      combatBox.innerHTML += "Hooray! " + megaman + " has defeated " + robotmaster + "! </br>" + "</br>";
      combatBox.scrollTop = combatBox.scrollHeight;
      btn.disabled = true;
      enemyImg.classList.add("defeat");
      scroll();
      return setTimeout(nextEnemy, 3000);
    }
    combatTxt += robotmaster + " hits " + megaman + " for " + damage + "!";
    combatBox.innerHTML += combatTxt.fontcolor("red") + "</br>";
    hero.health -= damage;
    if(hero.health <= 0){
      hero.health = 0;
      playerhealth.innerHTML = megaman + " </br> HP: " + hero.health;
      combatBox.innerHTML += megaman + " has been defeated by " + robotmaster + "!";
      combatBox.scrollTop = combatBox.scrollHeight;
      btn1.disabled = true;
      playerImg.classList.add('defeat');
      return;
    } else {
      playerhealth.innerHTML = megaman + " </br> HP: " + hero.health;
  }
}

//Animations
function shoot(){
  var megaman = document.getElementById('player-img');
  megaman.style.webkitAnimation = "none";
  setTimeout(function(){
    megaman.style.webkitAnimation = "shoot .3s steps(3)"
  },10)
}

function run(){
  var megaman = document.getElementById('player-img');
  megaman.style.webkitAnimation = "none";
  setTimeout(function(){
    megaman.style.webkitAnimation = "run 1s steps(10) 3"
  },10)
}

function scrollbg(){
  var bg = document.getElementById('background');
  background.style.webkitAnimation = "none";
  setTimeout(function(){
    background.style.webkitAnimation = "scroll linear 3s"
  },10)
}

function scroll(){
  run();
  scrollbg();
}

health();

function battle(){
  shoot();
  playerTurn();
  enemyTurn();
}
