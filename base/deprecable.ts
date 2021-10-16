
export class Deprecable {
  private _current: number;
  private _maximum: number;
  private _minimum: number;

  constructor(max: number, min = 0) {
    this._current = max;
    this._maximum = max;
    this._minimum = min;
  }

  public deprecate(amount: number): void {
    this._current = Math.max(this._current - amount, this._minimum)
  }

  public increment(amount: number, isBonus = false): void {
    this._current += amount;

    if (!isBonus) {
      this._current = Math.min(this._current, this._maximum);
    }
  }

  public reset(): void {
    this._current = this._maximum;
  }

  public get value(): number {
    return this._current;
  }
  
  public get max(): number {
    return this._maximum;
  }
}
