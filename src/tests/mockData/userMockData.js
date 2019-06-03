export const goodSignUpDetail = [
  // Good credentials
  {
    firstName: 'ebenezer',
    lastName: 'mankind',
    password: '12345678',
    email: 'obeyboy@yahmail.com',
    address: '13, oshn street lagos state Nigeria',
    password_confirmation: '12345678',
  },
];

export const badSignUpDetails = [
  // Email already registered(conflict) ====>[0]
  {
    firstName: 'obeyboy',
    lastName: 'mankind',
    password: '12345678',
    email: 'obeyboy@yahmail.com',
    address: '13, oshn street lagos state Nigeria',
    password_confirmation: '12345678',
  },
  // Bad Request(Empty fields) ====>[1]
  {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    address: '',
    password_confirmation: '',
  },
];
