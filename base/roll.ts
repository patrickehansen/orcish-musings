
export class Roll {
  private _value: number;
  private _dice: Array<number>;
  private _bonus: number;

  constructor(dice: string, bonus: number = 0) {
    this._bonus = bonus;
    const [ count, size ] = dice.toLowerCase().split('d').map(v => Number(v));

    let sum = 0;
    for (let i = 0; i < count; i++) {
      const die = Math.ceil(Math.random() * size)
      this._dice.push(die);
      sum += die;
    }

    sum -= bonus;
    this._value = sum;
  }

  public get result(): number {
    return this._value;
  }

  public toString(): string {
    return `[${this._dice}]-${this._bonus}=${this._value}`;
  }
}
