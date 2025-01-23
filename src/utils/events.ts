/**
 * Enum for system events.
 */
export const enum SystemEvents {
  ERROR = "system:error",
  ALERT = "system:alert",
}

/**
 * Enum for auth events.
 */
export const enum AuthEvents {
  LOGIN_SUCCESS = "auth:login-sucess",
  LOGIN_FAILED = "auth:login-failed",
  TRY_AUTH = "auth:try-auth",
  SHOW_LOGIN = "auth:show-login",
  RECEIVE_DATA = "auth:receive-data",
}

/**
 * Enum for character events.
 */
export const enum CharacterEvents {
  GET = "character:get",
  SELECT = "character:select",
  INIT_CREATE = "character:init-create",
  UPDATE_PREVIEW = "character:update-preview",
  CREATE = "character:create",
  CREATED = "character:created",
  UPDATE = "character:update",
  CONFIRM = "character:confirm",
  VERIFY_CHARACTER_NAME = "player-server:verify-character-name",
}

/**
 * Enum for chat events.
 */
export const enum ChatEvents {
  MESSAGE = "chat:message",
  ACTION = "chat:action",
}

/**
 * Enum for UI events.
 */
export const enum UIEvents {
  CHECK_CHARACTER_NAME = "character-ui:check-character-name",
  FAIL_TO_CREATE_CHARACTER = "character-ui:fail-to-create-character",
  SET_CHARACTER_PARAM = "character-ui:set-character-param",
  POINT_CREATOR_CAMERA_TO = "character-ui:point-creator-camera-to",
}
