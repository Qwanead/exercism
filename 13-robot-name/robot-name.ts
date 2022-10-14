export class Robot {
  private _name:string;
  private static nameSet = new Set<string>([]);

  constructor() {
    this._name = this.getName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.getName();
  }

  public static releaseNames(): void {
    Robot.nameSet = new Set([]);
  }

  private getRndInteger(min:number, max:number):number {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  private get rndNum():number {
    return this.getRndInteger(0, 9);
  }

  private get rndChar():string {
    const CHAR_CODE_START = 'A'.charCodeAt(0);
    const CHAR_CODE_END = 'Z'.charCodeAt(0);

    return String.fromCharCode(this.getRndInteger(CHAR_CODE_START, CHAR_CODE_END));
  }

  private generateName = ():string => {
    const mask = 'AA000';
    return [...mask].map((it) => {
      switch (it) {
        case 'A':
          return this.rndChar;
        case '0':
          return this.rndNum;
        default:
          return '';
      }
    }).join('');
  }


  private getName():string {
    let name = this.generateName();
    while (Robot.nameSet.has(name)) {
      name = this.generateName();
    }
    Robot.nameSet.add(name);
    return name;
  }
}
