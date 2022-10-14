const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

export class Clock {
  private _hour = 0;
  private _minute = 0;

  constructor(hour: number, minute: number  = 0) {
    this.setTime(hour, minute);
  }

  private setTime(hour: number, minute: number = 0): void {
    this._minute = minute % MINUTES_IN_HOUR;
    this._hour = (hour + (minute - this._minute) / MINUTES_IN_HOUR) % HOURS_IN_DAY;
    if (this._minute < 0) {
      this._minute += MINUTES_IN_HOUR;
      this._hour -= 1;
    }
    if (this._hour < 0) {
      this._hour += HOURS_IN_DAY;
    }
  }

  public toString(): string {
    const hour = String(this._hour).length === 1
      ? `0${this._hour}` : `${this._hour}`;
    const minute = String(this._minute).length === 1
      ? `0${this._minute}` : `${this._minute}`;

    return `${hour}:${minute}`
  }

  public plus(minutes: number): Clock {
    this.setTime(this._hour, this._minute + minutes);
    return this;
  }

  public minus(minutes: number): Clock {
    this.setTime(this._hour, this._minute - minutes);
    return this;
  }

  public equals(clock: Clock): boolean {
    return clock.toString() === this.toString();
  }
}
