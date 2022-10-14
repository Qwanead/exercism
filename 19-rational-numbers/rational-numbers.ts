export class Rational {
  numer: number;
  denomin: number;

  constructor(a: number, b: number) {
    this.numer = a;
    this.denomin = b;
    this.normalize();
  }

  add({ numer: a, denomin: b }: Rational): Rational {
    this.numer = this.numer * b + a * this.denomin;
    this.denomin *= b;
    this.normalize();
    return this;
  }

  sub({ numer: a, denomin: b }: Rational): Rational {
    this.numer = this.numer * b - a * this.denomin;
    this.denomin *= b;
    this.normalize();
    return this;
  }

  mul({ numer: a, denomin: b }: Rational): Rational {
    this.numer *= a;
    this.denomin *= b;
    this.normalize();
    return this;
  }

  div({ numer: a, denomin: b }: Rational): Rational {
    this.numer *= b;
    this.denomin *= a;
    this.normalize();
    return this;
  }

  abs(): Rational {
    this.numer = Math.abs(this.numer);
    this.denomin = Math.abs(this.denomin);
    return this;
  }

  exprational(n: number): Rational {
    this.numer **= n;
    this.denomin **= n;
    this.normalize();
    return this;
  }

  expreal(n: number): number {
    return Number((n ** (this.numer / this.denomin)).toPrecision(15));
  }

  reduce(): Rational {
    return this;
  }

  private normalize(): void {
    const gcd = this.getGCD(this.numer, this.denomin)
    this.numer /= gcd;
    this.denomin /= gcd;
    if (this.denomin < 0 || (this.denomin < 0 && this.numer < 0)) {
      this.numer *= -1;
      this.denomin *= -1;
    }
  }

  private getGCD(a: number, b: number): number {
    let m = Math.abs(a);
    let n = Math.abs(b);
    let result = n;
  
    while (m !== 0 && n !== 0) {
      if (m < n) {
        [m, n] = [n, m];
      }
  
      result = n;
      m %= n;
    }
  
    return result;
  }
}
