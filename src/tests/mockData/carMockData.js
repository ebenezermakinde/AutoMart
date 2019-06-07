
export const goodCarDetails = [
  // Good car input
  {
    manufacturer: 'benz',
    model: 'c-600',
    price: 1500000,
    bodyType: 'car',
    transmission: 'Manual',
    state: 'Old',
  },
];

export const badCarDetails = [
  // Bad car state input ===>[0]
  {
    manufacturer: 'benz',
    model: 'c-600',
    price: 1500000,
    bodyType: 'car',
    transmission: 'manual',
    state: 'Old%^&$#',
  },
  // Bad car transmission input ===>[1]
  {
    manufacturer: 'benz',
    model: 'c-600',
    price: 1500000,
    bodyType: 'car',
    transmission: 'manual&*&^46820',
    state: 'Old',
  },
];
