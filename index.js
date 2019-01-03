function dwarfRollCall(dwarves) {
 let dwarveGreeting = "";
 for(let i = 0; i < dwarves.length; i++){
     let eachDwarf = dwarves[i];

   dwarveGreeting += (i + 1) + ". " + dwarves[i] + " ";

   dwarveGreeting += " " + (i + 1) + ". " + dwarves[i];
 }
   return dwarveGreeting;
}

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

function findTheCheese (foods) {
  for(let i = 0; i < foods.length; i++){
      let eachFood = foods[i];
    if(eachFood === "cheddar" || eachFood === "gouda" || eachFood === "camembert"){
       return eachFood;
    }
  }
     return "no cheese!";
}
