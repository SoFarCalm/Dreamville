function randomize(){
var positions = ["pos1","pos2","pos3","pos4","pos5","pos6"];
var imgs = ["card1","card2","card3","card4","card5","card6"];

for(var i = 0; i < 6; i++){
  var position = positions.splice([Math.floor(Math.random() * positions.length)], 1);
  var img = imgs.splice([Math.floor(Math.random() * positions.length)], 1);
  var elem = document.createElement("img");
  elem.src = "images/" + img + ".png";
  document.getElementById(position).appendChild(elem);
 }
}

randomize();

/*var nums = ["one","two","three","four"];

var num = [Math.floor(Math.random() * nums.length)];

console.log(nums.splice(num,1));
console.log(nums);
*/
