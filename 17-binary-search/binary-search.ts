export function find(haystack: number[], needle: number): number | never {
  let part = { left: 0, right: haystack.length - 1 };

  while (part.right - part.left >= 0) {
    const middle = Math.floor((part.right + part.left) / 2);
    if (haystack[middle] === needle) {
      return middle;
    }
    part = haystack[middle] > needle
      ? { left: part.left, right: middle - 1 }
      : { left: middle + 1, right: part.right };
  }
  
  throw new Error('Value not in array');
}
