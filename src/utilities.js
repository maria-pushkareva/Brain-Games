export const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');

export const getRandomNum = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

export const chooseOperator = (num) => {
  switch (num) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

export const calculate = ([num1, operator, num2]) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

export const getGreatestCommonDevisor = ([num1, num2]) => {
  let result = 1;
  for (let i = 2; (i <= num1 && i <= num2); i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result = i;
    }
  }
  return result;
};

export const isPrime = (num) => {
  let devisor;
  for (let i = num; i > 1; i -= 1) {
    if (num % i === 0) {
      devisor = i;
    }
  }
  return (devisor === num) ? 'yes' : 'no';
};
