const multiplyfour = (num) => {
  return num * 4;
};
const substractTwo = (num) => {
  return num - 2;
};
const addFive = (num) => {
  return num + 5;
};

function compose(...args) {
  return function (init) {
    // let result = init;
    // for (let i = args?.length - 1; i >= 0; i--) {
    //   result = args[i](result);
    // }
    // return result;

    return args?.reduceRight((acc, curr) => {
      return curr(acc);
    }, 5);
  };
}
function pipe(...args) {
  return function (init) {
    // let result = init;
    // for (let i = args?.length - 1; i >= 0; i--) {
    //   result = args[i](result);
    // }
    // return result;

    return args?.reduce((acc, curr) => {
      return curr(acc);
    }, 5);
  };
}

const evaluate = compose(addFive, substractTwo, multiplyfour);

console.log(evaluate(5), "result");
