const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this
  },
  mul(a) {
    this.total *= a;
    return this
  },
};

const result = calc.add(1).add(1).mul(10);
// console.log(result.total);
