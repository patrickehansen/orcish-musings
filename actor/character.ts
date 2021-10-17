import { Pawn, SerializedPawn } from './pawn'
import { Deprecable } from '../base/deprecable'
import { CharacterStat } from '../base/stat'

export interface CharacterStats {
  END: CharacterStat;
  STR: CharacterStat;
  AGI: CharacterStat;
  RES: CharacterStat;
  ALT: CharacterStat;
  MAG: CharacterStat;
  MAR: CharacterStat;
}

export interface CharacterStatus {
  Health: Deprecable;
  Mana: Deprecable;
  Action: Deprecable;
}

export interface SerializedCharacter extends SerializedPawn {

}

export class Character extends Pawn {
  private stats: CharacterStats;
  private status: CharacterStatus;

  constructor() {
    super();
  }

  public serialize(): SerializedCharacter {
    return Object.assign(super.serialize(), null);
  }
}