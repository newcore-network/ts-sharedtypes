/**
 * Enum for character gender.
 */
export enum Gender {
  Male = 0,
  Female = 1,
}

/**
 * Enum for face feature indices.
 */
export enum FaceFeaturesIndex {
  NoseWidth = 0,
  NosePeak,
  NoseLength,
  NoseBoneCurveness,
  NoseTip,
  NoseBoneTwist,
  EyebrowUpDown,
  EyebrowInOut,
  CheekBonesUpDown,
  CheekSidewaysBoneSize,
  CheekBonesWidth,
  EyeOpening,
  LipThickness,
  JawBoneWidth,
  JawBoneShape,
  ChinBoneUpDown,
  ChinBoneLength,
  ChinBoneShape,
  ChinHole,
  NeckThickness,
}

/**
 * Enum for overlay IDs.
 * Index ranges are inclusive.
 * to disable a index, set the value to 255.
 */
export enum OverlayID {
  /**Index range: 0 - 23 */
  Blemishes = 0,
  /**Index range: 0 - 28 */
  FacialHair,
  /**Index range: 0 - 33 */
  Eyebrows,
  /**Index range: 0 - 14 */
  Ageing,
  /**Index range: 0 - 74 */
  Makeup,
  /**Index range: 0 - 6 */
  Blush,
  /**Index range: 0 - 11 */
  Complexion,
  /**Index range: 0 - 10 */
  SunDamage,
  /**Index range: 0 - 9 */
  Lipstick,
  /**Index range: 0 - 17 */
  MolesFreckles,
  /**Index range: 0 - 16 */
  ChestHair,
  /**Index range: 0 - 11 */
  BodyBlemishes,
  /**Index range: 0 - 1 */
  AddBodyBlemishes,
}

/**
 * Enum for component IDs.
 */
export enum Component {
  Head = 0,
  Beard,
  Hair,
  Torso,
  Legs,
  Hands,
  Foot,
  None,
  /**Parachute, scuba tank */
  Accessories1,
  /** Bags, mask, scuba mask */
  Accessories2,
  DecalsAndMask,
  AuxiliaryTorso,
}

export enum BodyPart {
  Pelvis = 0,
  LeftHip = 1,
  LeftLeg = 2,
  LeftFoot = 3,
  RightHip = 4,
  RightLeg = 5,
  RightFoot = 6,
  LowerTorso = 7,
  UpperTorso = 8,
  Chest = 9,
  UnderNeck = 10,
  LeftShoulder = 11,
  LeftUpperArm = 12,
  LeftElbrow = 13,
  LeftWrist = 14,
  RightShoulder = 15,
  RightUpperArm = 16,
  RightElbrow = 17,
  RightWrist = 18,
  Neck = 19,
  Head = 20,
}
