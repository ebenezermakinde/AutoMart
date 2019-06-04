const constants = {

  // HTTP STATUS
  STATUS_OK: 200,
  STATUS_CREATED: 201,
  STATUS_NO_CONTENT: 204, // FOR DELETE REQUETS
  STATUS_NOT_FOUND: 404, // ENTRY OK BUT RECORD NOT FOUND
  STATUS_UNPROCESSED: 422, // INVALID ENTRY
  STATUS_BAD_REQUEST: 400, // EMPTY FIELD
  STATUS_PARTIAL_CONTENT: 206, // MISSING FIELD
  STATUS_CONFLICT: 409,
  STATUS_UNATHORIZED: 401,
  STATUS_FORBIDDEN: 403,
  STATUS_SERVER_ERROR: 500,

  // GENERAL MESSAGES FOR USER REGISTRATION
  MESSAGE_INVALID_LOGIN: 'Username or password is incorrect',
  MESSAGE_CONFLICT_EMAIL: 'Email already exists',
  MESSAGE_NOT_FOUND: 'Not found',
  MESSAGE_FIRSTNAME_REQUIRED: 'The firstName field is required.',
  MESSAGE_LASTNAME_REQUIRED: 'The lastName field is required.',
  MESSAGE_ADDRESS_REQUIRED: 'The address field is required.',
  MESSAGE_PASSWORD_REQUIRED: 'The password field is required.',
  MESSAGE_PASSWORD_CONFIRM_REQUIRED: 'The password confirmation field is required.',
  MESSAGE_EMAIL_REQUIRED: 'The email field is required.',

  // MESSAGES FOR CAR
  MESSAGE_NO_CAR: 'The requested car was not found',
  MESSAGE_STATE_OPTIONS: 'The valid options are either New or Old',
  MESSAGE_TRANSMISSION_OPTIONS: 'The valid options are Automatic, Manual or Other',
};

export default constants;
