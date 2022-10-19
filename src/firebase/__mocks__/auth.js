export const loginUser = jest.fn(() => Promise.resolve({}));
export const loginGoogle = jest.fn(() => Promise.resolve({}));
export const newUser = jest.fn(() => Promise.resolve({}));
export const getAuth = jest.fn(() => ({
  currentUser: {
    displayName: 'gabriela',
  },
}));
