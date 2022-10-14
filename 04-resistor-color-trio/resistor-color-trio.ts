const bandColor = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;
type Color = keyof typeof bandColor;

export const decodedResistorValue = ([firstColor, secondColor, zeroCounter]: Color[]): string => {
  let resistance = (bandColor[firstColor] * 10
    + bandColor[secondColor])
    * 10 ** bandColor[zeroCounter];
  let unit = 'ohms';
  if (resistance % 1000 === 0) {
    resistance /= 1000;
    unit = 'kiloohms';
  }
  return `${resistance} ${unit}`;
};