import { Roll } from './roll';

export interface StatModifier {
  source: string;
  sourceType: string;
  value: number;
}

export interface StatInfo {
  abridged: string;
  full: string;
  description: string;
}

interface ModifierDictionary {
  [key: string] : StatModifier;
}

export class CharacterStat {
  private _info: StatInfo;
  private _raw: number;
  private _value: number;
  private _name: string;
  private _modifiers: ModifierDictionary = {};

  constructor(info: StatInfo, value: number, modifiers: Array<StatModifier>) {
    this._info = info;
    this._value = value;
    this._raw = value;
    this._name = info.abridged;

    modifiers.forEach(v => this.addModifier(v));
  }

  public addModifier(mod: StatModifier): number {
    if (this._modifiers[mod.source]) throw new Error('Source duplication.');
    
    this._modifiers[mod.source] = mod;
    this._value += mod.value;

    return this.value;
  }

  public removeModifier(source: string): number {
    if (!this._modifiers[source]) throw new Error('Source not found.');

    this._value -= this._modifiers[source].value;
    delete this._modifiers[source];

    return this.value;
  }

  public listModifiers(): Array<StatModifier> {
    return Object.values(this._modifiers);
  }

  public get rawValue(): number {
    return this._raw;
  }

  public get value(): number {
    return this._value;
  }

  public get name(): string {
    return this._name;
  }

  public get fullName(): string {
    return this._info.full;
  }

  public get description(): string {
    return this._info.description;
  }

  public roll(): Roll {
    // TODO:: Implement game mode here to provide base roll
    return new Roll('3d6', this._value);
  }

  public toString(): string {
    return `${this.name}:${this.value}`
  }
}

export interface SerializedCharacterStats {

}

export class CharacterStats {
  END: CharacterStat;
  STR: CharacterStat;
  AGI: CharacterStat;
  RES: CharacterStat;
  ALT: CharacterStat;
  MAG: CharacterStat;
  MAR: CharacterStat;

  public serialize(): SerializedCharacterStats {
    return null;
  }
}
