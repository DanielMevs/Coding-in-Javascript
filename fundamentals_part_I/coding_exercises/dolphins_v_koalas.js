/* Write your code below. Good luck! 🙂 */

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scorceKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scorceKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scorceKoalas) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scorceKoalas = (109 + 95 + 123) / 3;

// if (scoreDolphins > scorceKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scorceKoalas && scorceKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// BONUS 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scorceKoalas = (109 + 95 + 123) / 3;

if (scoreDolphins > scorceKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scorceKoalas && scorceKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scorceKoalas &&
  scoreDolphins >= 100 &&
  scorceKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}
