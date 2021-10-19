
   
//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

const createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  return new Array(managerName, managerAge, currentTeam, trophiesWon);
}

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

const createFormation = (arr) => {
  if(arr.length===0){
    return null;
  }
  let obj = {"defender":arr[0], "midfield":arr[1], "forward":arr[2]};
  return obj;
}



// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

const filterByDebut = (yr) => {

  let arr=[];
  for (const it of players) {
    if(it['debut']===yr){
      arr.push(it);
    }
  }
  return arr;
}


//Progression 4 - Filter players that play at the position _______

const filterByPosition = (pos) => {
  let a = [];
  for (const it of players) {
    if(it['position']===pos){
      a.push(it);
    }
  }
  return a;
}


//Progression 5 - Filter players that have won ______ award

const filterByAward = (award) => {

  if(award===""){
    return [];
  }
  let awardees=[];
  for(const it of players){
    let hasAward=false,awardsList=it['awards'];
    for(const k of awardsList){
      if(k['name']==award){
        hasAward=true;
        break;
      }
    }
    if(hasAward){
      awardees.push(it);
    }
  }
  return awardees;
}

//Progression 6 - Filter players that won ______ award ____ times

const filterByAwardxTimes = (awdName, times) => {
  let res=[];
  for(const player of players){
    let tms=0,awards = player["awards"];
    for(const award of awards){
      if(award["name"]==awdName){
        tms++;
      }
    }
    if(tms==times){
      res.push(player);
    }
  }
  return res;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry = (awdName, cntry) => {
  let res=[];
  for(const player of players){
    let wonAward=false,awards = player["awards"];
    for(const award of awards){
      if(award["name"]==awdName){
        wonAward=true;
      }
    }
    if(wonAward && player['country']==cntry){
      res.push(player);
    }
  }
  return res;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

const filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  let res=[];
  if(noOfAwards==null && team==null && age==null){
    return [];
  }
  for(const player of players){
    // console.log(player["awards"]);
    // let wonAward=false,awards = player["awards"];
    if((player["awards"].length>=noOfAwards && player["team"]==team && player["age"]==age)){
      res.push(player);
    }
  }
  return res;
}


//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological orde