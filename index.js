function dwarfRollCall(dwarves) {
 let dwarveGreeting = "";
 for(let i = 0; i < Math.floor(dwarves.length/2); i++){
     let eachDwarf = dwarves[i];

   dwarveGreeting += (i + 1) + ". " + dwarves[i] + " ";

   //dwarveGreeting += " " + (i + 1) + ". " + dwarves[i];
 }
   return dwarveGreeting;
}

dwarfRollCall(['adam', 'Kevin', 'Cal', 'Alice', 'Ron']);

function summonCaptainPlanet(planeteerCalls){
  for(let i = 0; i < planeteerCalls.length; i++){
     planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
     return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
      if(words[i].length > 4){
        return true;
      }
  }
        return false;
}
let foodCheese = ['apple', 'gouda', 'cheddar', 'banana'];
function findTheCheese (foods) {
  for(let i = 0; i < foods.length; i++){
      let eachFood = foods[i];
    if(eachFood === "cheddar" || eachFood === "gouda" || eachFood === "camembert" || eachFood === 'swiss'){
       return eachFood;
    }
  }
     return "no cheese!";
}

function wordsWithB(words){
  let wordsStartB = [];
  for(let i = 0; i < words.length; i++){
       let eachWord = words[i];
      if(eachWord[0] === 'b'){
        wordsStartB.push(eachWord);
      }
  }
     return wordsStartB;
}

