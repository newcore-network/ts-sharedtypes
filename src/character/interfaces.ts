import { Gender, OverlayID, FaceFeaturesIndex, Component } from "./enums";

export type Accessories = Record<number, Accessory>;
export type Tattoos = Tattoo[];
export type ComponentVariations = Record<Component, ComponentVariation>;
export type HeadOverlays = Record<OverlayID, HeadOverlay>;
export type FaceFeatures = Record<FaceFeaturesIndex, FaceFeature>;

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
  componentVariation: ComponentVariations;
  headOverlay: HeadOverlays;
  faceFeatures: FaceFeatures;
  accessories: Accessories;
  tattoos: Tattoos;
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
