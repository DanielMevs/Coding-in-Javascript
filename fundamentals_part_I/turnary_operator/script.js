const ageSteve = 23;
ageSteve >= 18
  ? console.log("Steve likes to drink wine")
  : console.log("Steve likes to drink water ");

const drink = ageSteve >= 18 ? "wine" : "water";
console.log(`Steve drinks ${drink}`);
console.log(`Steve drinks ${ageSteve >= 18 ? "wine" : "water"}`);
