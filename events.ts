export interface LifecycleEvents {
  // Combat stuff
  BeginTurn,
  EndTurn,

  StartRound,
  EndRound,


  // World stuff
  StartWorld,
  LoadWorld,

  

  // Item stuff
  Equip,
  Unequip,
  PickUp,
  Drop,


  // Damage?
  TryToHit, // ??? When we roll to attack, to determine whether we hit or not (+2 to attack roll)

  TakeDamage,
  CanTakeDamage,

  // Pawn


}