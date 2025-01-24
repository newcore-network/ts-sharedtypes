/**
 * Represents valid tattoo zones as string literal types.
 */
export type TattooZone =
  | "ZONE_HEAD"
  | "ZONE_LEFT_ARM"
  | "ZONE_RIGHT_ARM"
  | "ZONE_LEFT_LEG"
  | "ZONE_RIGHT_LEG"
  | "ZONE_TORSO";

/**
 * Represents valid gender values.
 * - `0`: Male
 * - `1`: Female
 */
export type Gender = 0 | 1;

/**
 * Represents valid face feature indices.
 * The range is from 0 to 19.
 */
export type FaceFeaturesIndex =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19;

/**
 * Represents valid overlay IDs.
 * The range is from 0 to 12.
 */
export type OverlayID = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Represents valid component IDs.
 * The range is from 0 to 11.
 */
export type Component = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

/**
 * Represents the data structure for a character model.
 */
export interface ICharacter {
  id?: number;
  UUID: string;
  name: string;
  lastname: string;
  model: number;
  age: number;

  /**
   * The character's gender (`0` for Male, `1` for Female).
   */
  gender: Gender;
  money?: number;

  health?: number;
  armour?: number;

  lastPosition: { x: number; y: number; z: number };
  lastDimension: number;
  onlineTime: number;
  blendData: BlendData;
  eyesColor: number;
  hairColors: number[];

  componentVariation: Record<Component, ComponentVariation>;
  headOverlay: Record<OverlayID, HeadOverlay>;
  faceFeatures: Record<FaceFeaturesIndex, FaceFeature>;

  tattoos: Record<TattooZone, Omit<Tattoo, "zone">>;
  clothes: Record<Component, ClothingItem>;
  accessories: Record<Component, Accessory>;
}

/**
 * Represents data for blending the character's facial features.
 */
export interface BlendData {
  /**
   * The index of the character's mother (range: 0 to 45).
   */
  mother: number;

  /**
   * The index of the character's father (range: 0 to 45).
   */
  father: number;

  /**
   * The mix ratio for facial shape (range: 0.0 to 1.0).
   */
  shapeMix: number;

  /**
   * The mix ratio for skin tone (range: 0.0 to 1.0).
   */
  skinMix: number;
}

/**
 * Represents configuration for head overlays.
 */
export interface HeadOverlay {
  /**
   * The index of the overlay.
   */
  index: number;

  /**
   * The opacity of the overlay (range: 0.0 to 1.0).
   */
  opacity: number;
}

/**
 * Represents the scaling of a face feature.
 */
export interface FaceFeature {
  /**
   * The scale value for the feature (range: -1.0 to 1.0).
   */
  scale: number;
}

/**
 * Represents variations of a character's components (e.g., clothing).
 */
export interface ComponentVariation {
  /**
   * The drawable ID of the component.
   */
  drawable: number;

  /**
   * The texture ID of the component.
   */
  texture: number;

  /**
   * The palette ID of the component.
   */
  paletteId: number;
}

/**
 * Represents an accessory worn by the character.
 */
export interface Accessory {
  /**
   * The drawable ID of the accessory.
   */
  drawable: number;

  /**
   * The texture ID of the accessory.
   */
  texture: number;

  /**
   * The palette ID of the accessory (optional).
   */
  paletteId?: number;
}

/**
 * Represents a tattoo applied to the character.
 */
export interface Tattoo {
  /**
   * The hash of the tattoo design.
   */
  hash: number;

  /**
   * The zone where the tattoo is applied.
   */
  zone: TattooZone;
}

/**
 * Represents an item of clothing worn by the character.
 */
export interface ClothingItem {
  /**
   * The drawable ID of the clothing item.
   */
  drawable: number;

  /**
   * The texture ID of the clothing item.
   */
  texture: number;

  /**
   * The palette ID of the clothing item (optional).
   */
  paletteId?: number;
}
