const plain = [...'abcdefghijklmnopqrstuvwxyz'];
const cipher = [...plain].reverse();
const numbers = [...'1234567890'];
const plainWithNum = [...plain, ...numbers];
const cipherWithNum = [...cipher, ...numbers];

export function encode(plainText: string): string {
  return [...plainText.toLowerCase()]
    .filter((char) => plainWithNum.includes(char))
    .map((char) => cipherWithNum[plainWithNum.indexOf(char)])
    .flatMap((char, i) => (i === 0 || i % 5 !== 0) ? char : [' ', char])
    .join('');
}

export function decode(cipherText: string): string {
  return [...cipherText]
    .map((char) => plainWithNum[cipherWithNum.indexOf(char)])
    .join('');
}
