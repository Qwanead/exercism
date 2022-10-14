export function hey(message: string): string {
  const str = message.trim();
  const strToLower = str.toLowerCase();
  const strToUpper = str.toUpperCase();
  
  const isYell = str === strToUpper && str !== strToLower;
  const isQuestion = str.endsWith('?');
  const isNothing = str === '';

  switch (true) {
    case (isQuestion && isYell):
      return `Calm down, I know what I'm doing!`;
    case (isYell):
      return 'Whoa, chill out!';
    case (isQuestion):
      return 'Sure.'
    case (isNothing):
      return 'Fine. Be that way!'
    default:
      return 'Whatever.';
  }
}
