export class Matrix {
  matrixStr: string;

  constructor(matrixStr: string) {
    this.matrixStr = matrixStr;
  }

  get rows(): number[][] {
    return this.matrixStr
      .split('\n')
      .map((it) => it.split(' '))
      .map((row) => row.map((str) => Number(str)));
  }

  get columns(): number[][] {
    return this.rows[0]
      .map((_, colIndex) => this.rows.map(row => row[colIndex]));
  }
}
