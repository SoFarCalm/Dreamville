var fighter1 = {
  name: "Hero",
  hp: 30
};

var fighter2 = {
  name: "El Chupacabra",
  hp: 35
};


//Fighters Health//
function health(){
var fighter1health = document.getElementById('fighter1health');
var fighter2health = document.getElementById('fighter2health');
fighter1health.innerHTML = "HP: " + fighter1.hp;
fighter2health.innerHTML = "HP: " + fighter2.hp;

}
var btn = document.getElementById('btn1');
btn.addEventListener("click", battle);

//Reset Game//
var resetbtn = document.getElementById('btn2');
resetbtn.addEventListener('click', function(){
  var combatBox = document.getElementById('combat');
  var chupa = document.getElementById('fighter2');
  var hero = document.getElementById('fighter1');
  fighter1.hp = 30;
  fighter2.hp = 35;
  fighter1health.innerHTML = "HP: " + fighter1.hp;
  fighter2health.innerHTML = "HP: " + fighter2.hp;
  hero.classList.remove("defeat");
  chupa.classList.remove("defeat");
  btn.disabled = false;
  combatBox.value = "";
});

//Calculate Fighter1 Damage//
function fighter1Dmg(){
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    var totalDmg = dice1 + dice2;

    combatTxt += fighter1.name + " deal " + totalDmg + " damage to " + fighter2.name + "!";
    combatBox.value += combatTxt + "\n";
    fighter2.hp -= totalDmg;
    if(fighter2.hp <= 0){
      fighter2.hp = 0;
      fighter2health.innerHTML = "HP: " + fighter2.hp;
    } else {
    fighter2health.innerHTML = "HP: " + fighter2.hp;
  }
}

//Calculate Fighter2 Damage//
function fighter2Dmg(){
    var chupa = document.getElementById('fighter2');
    var hero = document.getElementById('fighter1');
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    var totalDmg = dice1 + dice2;

    if(fighter2.hp <= 0){
      combatBox.value += "\n" + "Hooray! " + fighter1.name + " have defeated " + fighter2.name + "!";
      btn1.disabled = true;
      chupa.classList.add("defeat");
      return;
    }
    combatTxt += fighter2.name + " hits " + fighter1.name + " for " + totalDmg + "!";
    combatBox.value += combatTxt + "\n" + "\n";
    fighter1.hp -= totalDmg;
    if(fighter1.hp <= 0){
      fighter1.hp = 0;
      fighter1health.innerHTML = "HP: " + fighter1.hp;
      combatBox.value += fighter1.name + " have been defeated by " + fighter2.name + "!";
      btn1.disabled = true;
      hero.classList.add('defeat');
      return;
    } else {
      fighter1health.innerHTML = "HP: " + fighter1.hp;
    }
}

health()

function battle(){
  fighter1Dmg();
  fighter2Dmg();
}
