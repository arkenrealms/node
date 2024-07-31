export * as schema from './schema/types';

export interface Signature {
  hash: string;
  address: string;
}

export type Position = {
  x: number;
  y: number;
  z: number;
};

export enum Mechanic {
  RewardsIncrease = 1150, // +rewards %
  RewardsDecrease = 1160, // -rewards %
  MovementBurstOnKill = 1222, // % Movement Burst On Kill
  MovementBurstOnEvolve = 1223, // % Movement Burst On Evolve
  MovementBurstStrength = 1030, // % Movement Burst Strength
  AvoidDeathPenalty = 1102, // % Avoid Death Penalty
  DoublePickupChance = 1164, // % Double Pickup Chance
  IncreasedHealthOnKill = 1219, // % Increased Health On Kill
  EnergyDecay = 1105, // % Energy Decay
  SpriteFuel = 1117, // % Sprite Fuel
}
