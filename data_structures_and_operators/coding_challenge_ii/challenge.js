const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1. Loop over the game.scored array and print
each player name to the console, along with the
goal number (Example: "Goal 1: Lewandowki")
*/
for (let [idx, scorer] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${scorer}`);
}

/*
2. Use a loop to calculate the average odd and log
it to the console 
*/
const odds = Object.values(game.odds);
let average = 0;

for (let i of odds) {
  // console.log(i);
  average += i;
}

average /= odds.length;
console.log(average);

/* 3. Print the 3 odds to the console, but in a nice
formatted way */
teams = [game.team1, "", game.team2];

for (let [i, odd] of Object.values(game.odds).entries()) {
  let s = i === 1 ? "draw" : "victory ";
  console.log(`Odd of ${s}${teams[i]}: ${odd}`);
}

// OR

for (let objKey of Object.keys(game.odds)) {
  let odd = game.odds[objKey];
  game[objKey] === undefined
    ? console.log(`Odd of draw: ${odd}`)
    : console.log(`Odd of victory ${game[objKey]}: ${odd}`);
}

// OR

for (let [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/* BONUS: Create an object called scorers which
contains the names of the players who scored as
properties, and the number of goals as the value.*/

let scorers = {};
for (let scorer of game.scored) {
  scorers[scorer] = scorers[scorer] === undefined ? 1 : scorers[scorer] + 1;
}

// OR

scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
