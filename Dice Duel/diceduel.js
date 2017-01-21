var fighter1 = {
  name: "You",
  hp: 30
};

var fighter2 = {
  name: "chupacabra",
  hp: 50
};

function battle1(){
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    var totalDmg = dice1 + dice2;

    combatTxt += fighter1.name + " deal " + totalDmg + " damage to the " + fighter2.name + "!";
    combatBox.value += combatTxt + "\n";
    fighter2.hp -= totalDmg;
    if(fighter2.hp <= 0){
      combatBox.value += fighter1.name + " have defeated the " + fighter2.name + "!";
    }
}

function battle2(){
    var combatBox = document.getElementById('combat');
    var combatTxt = "";
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    var totalDmg = dice1 + dice2;

    combatTxt += fighter2.name + " hits " + fighter1.name + " for " + totalDmg + "!";
    combatBox.value += combatTxt + "\n" + "\n";
    fighter1.hp -= totalDmg;
    if(fighter1.hp <= 0){
      combatBox.value += fighter1.name + " have been defeated by the " + fighter2.name + "!";
    }
}

function battle(){
  battle1();
  battle2();
}

var btn = document.getElementById('btn');
btn.addEventListener("click", battle);
