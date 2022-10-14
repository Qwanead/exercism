interface Roster {
  [grade: number]: string[],
}

export class GradeSchool {
  private _roster: Roster = {};

  roster(): Roster {
    const rosterKeys = Object.keys(this._roster)
      .map((key) => Number(key)).sort();
    const result: Roster = {};
    rosterKeys.forEach((key) => {
      result[key] = this._roster[key];
    });
    return structuredClone(result);
  }

  add(name: string, grade: number): void {
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    Object.keys(this._roster)
      .map((key) => Number(key))
      .forEach((key) => {
        this._roster[key] = this._roster[key].filter((it) => it !== name);
      });
    this._roster[grade].push(name);
    this._roster[grade] = this._roster[grade].sort();
  }

  grade(gradeNum: number): string[] {
    return structuredClone(this._roster[gradeNum]) ?? [];
  }
}
