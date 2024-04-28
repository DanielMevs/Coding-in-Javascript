/* Write your code below. Good luck! 🙂 */

function calcTip(amount) {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  } else {
    return amount * 0.2;
  }
}
calcTip(100);
const bills = new Array(125, 555, 44);
let tips = new Array();
let totals = new Array();
bills.forEach(function (bill, idx) {
  tips.push(calcTip(bill));
  totals.push(tips[idx] + bill);
});
