var fighter1 = {
  name: "You",
  hp: 30
};

var fighter2 = {
  name: "El Chupacabra",
  hp: 35
};

var btn = document.getElementById('btn');
btn.addEventListener("click", battle);

function fighter1Dmg(){
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    var totalDmg = dice1 + dice2;

    if(fighter1.hp <= 0){
      combatBox.value += fighter1.name + " have been defeated by " + fighter2.name + "!";
    } else {
    combatTxt += fighter1.name + " deal " + totalDmg + " damage to " + fighter2.name + "!";
    combatBox.value += combatTxt + "\n";
    fighter2.hp -= totalDmg;
  }
}

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
      btn.disabled = true;
      chupa.classList.add("defeat");
      return;
    }
    else if(fighter1.hp <= 0){
      btn.disabled = true;
      hero.classList.add('defeat');
      return;
    } else {
    combatTxt += fighter2.name + " hits " + fighter1.name + " for " + totalDmg + "!";
    combatBox.value += combatTxt + "\n" + "\n";
    fighter1.hp -= totalDmg;
  }
}

function battle(){
  fighter1Dmg();
  fighter2Dmg();
}
