function randomize(){
var frontPositions = ["pos1a","pos2a","pos3a","pos4a","pos5a","pos6a"];
var frontImgs = ["card7","card7","card7","card7","card7","card7"]
var backPositions = ["pos1b","pos2b","pos3b","pos4b","pos5b","pos6b"];
var backImgs = ["card1","card2","card3","card4","card5","card6"];

for(var i = 0; i < 6; i++){
  var frontPosition = frontPositions.splice([Math.floor(Math.random() * frontPositions.length)], 1);
  var frontImg = frontImgs.splice([Math.floor(Math.random() * frontImgs.length)], 1);
  var backPosition = backPositions.splice([Math.floor(Math.random() * backPositions.length)], 1)
  var backImg = backImgs.splice([Math.floor(Math.random() * backImgs.length)], 1)
  var frontElem = document.createElement("img");
  var backElem = document.createElement("img");
  frontElem.src = "images/" + frontImg + ".png";
  backElem.src = "images/" + backImg + ".png";
  document.getElementById(frontPosition).appendChild(frontElem);
  document.getElementById(backPosition).appendChild(backElem);
 }
}
randomize();

function flip(){
  if (this.classList.contains('flipped')){
    this.classList.remove('flipped')
  }
  else {
    this.classList.add('flipped');
  }
}

var btns = document.getElementsByClassName('flipper');
for (var i = 0; i < btns.length; i++){
  var btn = btns[i];
  btn.addEventListener('click', flip);
}
