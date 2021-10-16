import { Actor, SerializedActor } from './actor'

export interface SerializedPawn extends SerializedActor {

}

export class Pawn extends Actor {
  public serialize(): SerializedPawn {
    return Object.assign(super.serialize(), null);
  }
}