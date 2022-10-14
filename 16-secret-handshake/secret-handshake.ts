const words = [
  'wink',
  'double blink',
  'close your eyes',
  'jump',
 ] as const;

type SecretWords = typeof words[number];

export const commands = (num: number): SecretWords[] => {
  const binReverseArr = num.toString(2).split('').reverse() as ('0' | '1')[];
  let resultArr = binReverseArr
    .slice(0, 4)
    .map((value, index) => {
      if (value === '1') {
        return words[index]
      }
      return null;
    });
  if (binReverseArr[4] === '1') {
    resultArr = resultArr.reverse();
  }

  return resultArr.filter((it) => it !== null) as SecretWords[];
}
