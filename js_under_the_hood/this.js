const john = {
  name: 'John',
  year: 1989,
  calcAge: function () {
    return 2037 - this.year;
  },
};
john.calcAge(); // 48
