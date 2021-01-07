//Ex1:

let resultArray = [];

let arr1 = [];
arr1.length = Number(prompt('How many value do you want for array 1: '));

for (let i = 0; i < arr1.length; i++) {
    arr1[i] = prompt(`Enter value No: ${i+1} for array 1`);
}

let arr2 = [];
arr2.length = Number(prompt('How many value do you want for array 2: '));

for (let j = 0; j < arr2.length; j++) {
    arr2[j] = prompt(`Enter value No: ${j+1} for array 2`)
    
}
console.log(arr1, arr2);

function sort(arr1, arr2) {
    var newArr = []
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) > -1) {
        arr2.splice(arr2.indexOf(arr1[i]), 1);
        arr1.splice(arr1.indexOf(arr1[i]), 1);
      }
    }
    return arr1, arr2
  }

sort(arr1, arr2);

for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (value === arr1[i + 1]) {
        arr1.splice(value.indexOf(), 1);
    }
    else if(!(value === arr1[i+1])) {
        resultArray.push(value)
        for (let j = 0; j < arr2.length; j++) {
            const comp = arr2[j];
            if(value === comp){;
                arr2.splice(comp.indexOf(), 1);
            }
            else {
                resultArray.push(comp);
            }
        }   
    }
}
console.log(resultArray);



// Ex2:

let arrPoint = [];

let teamInfo = [
    {
        name: "Arsenal",
        point:99,
        GD:45,
    },
    {
        name: "Chelsea",
        point:75,
        GD: 39,
    },
    {
        name: "MU",
        point:60,
        GD:29,
    },
    {
        name: "Liverpool",
        point:88,
        GD:39,
    }
]

function rankTeam(teamList) {
    let resultTeamList = teamList.sort(function(team1, team2){
        if (team1.point === team2.point) return team2.GD - team1.GD;
        return team2.point - team1.point;
    })
    for (let i = 0; i < resultTeamList.length; i++) {
        resultTeamList[i].position = i + 1;
    }
    return resultTeamList;
}

console.log(rankTeam(teamInfo));