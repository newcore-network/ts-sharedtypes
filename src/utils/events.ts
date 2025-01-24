/**
 * System events.
 */
export const SystemEvents = {
  ERROR: "system:error",
  ALERT: "system:alert",
} as const;
export type SystemEvent = (typeof SystemEvents)[keyof typeof SystemEvents];

/**
 * Auth events.
 */
export const AuthEvents = {
  LOGIN_SUCCESS: "auth:login-sucess",
  LOGIN_FAILED: "auth:login-failed",
  TRY_AUTH: "auth:try-auth",
  SHOW_LOGIN: "auth:show-login",
  RECEIVE_DATA: "auth:receive-data",
} as const;
export type AuthEvent = (typeof AuthEvents)[keyof typeof AuthEvents];

/**
 * Character events.
 */
export const CharacterEvents = {
  GET: "character:get",
  SELECT: "character:select",
  INIT_CREATE: "character:init-create",
  UPDATE_PREVIEW: "character:update-preview",
  CREATE: "character:create",
  CREATED: "character:created",
  UPDATE: "character:update",
  CONFIRM: "character:confirm",
  VERIFY_CHARACTER_NAME: "player-server:verify-character-name",
} as const;
export type CharacterEvent =
  (typeof CharacterEvents)[keyof typeof CharacterEvents];

/**
 * Chat events.
 */
export const ChatEvents = {
  MESSAGE: "chat:message",
  ACTION: "chat:action",
} as const;
export type ChatEvent = (typeof ChatEvents)[keyof typeof ChatEvents];

/**
 * UI events.
 */
export const UIEvents = {
  CHECK_CHARACTER_NAME: "character-ui:check-character-name",
  FAIL_TO_CREATE_CHARACTER: "character-ui:fail-to-create-character",
  SET_CHARACTER_PARAM: "character-ui:set-character-param",
  POINT_CREATOR_CAMERA_TO: "character-ui:point-creator-camera-to",
} as const;
export type UIEvent = (typeof UIEvents)[keyof typeof UIEvents];
