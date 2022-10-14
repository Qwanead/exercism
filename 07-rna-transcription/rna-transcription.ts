const nucleotidDict = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
} as const;
type RnaNucleotid = keyof typeof nucleotidDict;

export const toRna = (dna: string): string => {
  if (dna.split('').every((el) => el in nucleotidDict)) {
    return (dna.split('') as RnaNucleotid[])
      .map((rnaNucleotid) => nucleotidDict[rnaNucleotid])
      .join('');
  }
  throw new Error('Invalid input DNA.');
};
