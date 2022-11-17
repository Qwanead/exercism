const operators = [
  'plus',
  'minus',
  'multiplied by',
  'divided by',
];

const isNumber = (str: string): boolean => {
  const result = parseInt(str, 10);
  return !Number.isNaN(result);
};

const parseNumber = (str: string): number | never => {
  const result = parseInt(str, 10);
  if (Number.isNaN(result)) {
    throw new Error('Syntax error');
  }

  return result;
}

const calculate = (a: number, operator: string, b: number): number | never => {
  switch (operator) {
    case 'plus':
      return a + b;
    case 'minus':
      return a - b;
    case 'multiplied by':
      return a * b;
    case 'divided by':
      return a / b;
    default:
      throw new Error('Unknown operation');
  }
};

export const answer = (str: string): number | never => {
  const starter = 'What is';
  if (!str.startsWith(starter)) {
    throw new Error('Unknown operation');
  }
  
  let currentStr = str.slice(starter.length + 1);

  let spaceIndex = currentStr.indexOf(' ');
  if (spaceIndex === -1 && currentStr.endsWith('?')) {
    return parseNumber(currentStr);
  }

  let a = parseNumber(currentStr.slice(0, spaceIndex));
  currentStr = currentStr.slice(spaceIndex + 1);

  while (true) {
    const operator = operators.find((it) => currentStr.startsWith(it));
    if (!operator) {
      if (isNumber(currentStr.split(' ')[0])) {
        throw new Error('Syntax error');
      }
      throw new Error('Unknown operation');
    }
    currentStr = currentStr.slice(operator.length + 1);
    spaceIndex = currentStr.indexOf(' ');
    const bStr = currentStr.slice(0, spaceIndex > 0 ? spaceIndex : currentStr.length);
    const b = parseNumber(bStr);
    if (spaceIndex === -1) {
      return calculate(a, operator, b);
    }
    currentStr = currentStr.slice(bStr.length + 1);
    a = calculate(a, operator, b);
  }
}
