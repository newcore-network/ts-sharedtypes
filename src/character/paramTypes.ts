import { Component, FaceFeaturesIndex, Gender, OverlayID } from "./enums";

export interface GenderChange {
  param: "gender";
  value: Gender.Female | Gender.Male;
}

export interface BlendDataChange {
  param: "blendData";
  value: { mother: number; father: number; shapeMix: number; skinMix: number };
}

export interface EyesColorChange {
  param: "eyesColor";
  value: number;
}

export interface HairColorChange {
  param: "hairColor";
  value: { color1: number; color2: number };
}

export interface ComponentVariationChange {
  param: "setComponentVariation";
  value: {
    component: Component;
    drawable: number;
    texture: number;
    paletteId: number;
  };
}

export interface HeadOverlayChange {
  param: "setHeadOverlay";
  value: { overlayID: OverlayID; index: number; opacity: number };
}

export interface FaceFeatureChange {
  param: "faceFeature";
  value: { index: FaceFeaturesIndex; scale: number };
}

export type CharacterParamChange =
  | GenderChange
  | BlendDataChange
  | EyesColorChange
  | HairColorChange
  | ComponentVariationChange
  | HeadOverlayChange
  | FaceFeatureChange;
