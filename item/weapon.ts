import { SerializedPawn } from '../actor/pawn';
import { Item, SerializedItem } from './item'

export interface SerializedWeapon extends SerializedItem {

}

export class Weapon extends Item {
  public serialize(): SerializedWeapon {
    return Object.assign(super.serialize(), null);
  }
}