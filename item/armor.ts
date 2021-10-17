import { Item, SerializedItem } from './item'

export interface SerializedArmor extends SerializedItem{

}

export class Armor extends Item {
  public serialize(): SerializedArmor {
    return Object.assign(super.serialize(), null);
  }
}