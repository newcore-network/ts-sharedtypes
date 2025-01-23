import { Gender, OverlayID, FaceFeaturesIndex, Component } from "./enums";

/**
 * Interface for the character model.
 */
export interface ICharacter {
  id?: number;
  UUID: string;
  name: string;
  lastname: string;
  model: number;
  age: number;
  gender: Gender;
  money?: number;
  health?: number;
  armour?: number;
  lastPosition: { x: number; y: number; z: number };
  blendData: BlendData;
  /** Recommended eye color indexes range is from 1 to 31 */
  eyesColor: number;
  hairColors: number[];
  componentVariation: Record<Component, ComponentVariation>;
  headOverlay: Record<OverlayID, HeadOverlay>;
  faceFeatures: Record<FaceFeaturesIndex, FaceFeature>;
  accessories: Record<number, Accessory>;
  tattoos: Tattoo[];
  clothes: Record<number, ClothesItem>;
  lastDimesion: number;
  onlineTime: number;
}

/**
 * Interface for character blend data.
 */
export interface BlendData {
  /** from 0 to 45 */
  mother: number;
  /** from 0 to 45 */
  father: number;
  /** value between 0.0 and 1.0 */
  shapeMix: number;
  /** value between 0.0 and 1.0 */
  skinMix: number;
}

/**
 * Interface for head overlay configuration.
 */
export interface HeadOverlay {
  index: number;
  /**
   * value between 0.0 and 1.0.
   */
  opacity: number;
}

/**
 * Interface for face feature scaling.
 * @scale value between -1.0 and 1.0
 */
export interface FaceFeature {
  scale: number;
}

/**
 * Interface for character component variation.
 */
export interface ComponentVariation {
  drawable: number;
  texture: number;
  paletteId: number;
}

export interface Accessory {
  drawable: number;
  texture: number;
  paletteId?: number;
}

export interface Tattoo {
  zone: number;
  hash: string;
}

export interface ClothesItem {
  drawable: number;
  texture: number;
  paletteId?: number;
}
