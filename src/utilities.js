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

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};
