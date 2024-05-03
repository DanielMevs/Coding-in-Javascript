function printForecast(arr) {
  let result = '...';
  for (let i = 0; i < arr.length; i++) {
    result += ` ${arr[i]}°C in ${i + 1} days `;
    result += '...';
  }
  return result;
}

const data1 = [17, 21, 23];
console.log(printForecast(data1));
