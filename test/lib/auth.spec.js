import {signIn, signInGoogle} from "../../src/lib/auth.js"
import {signInWithEmailAndPassword, signInGoogle} from "../../src/lib/export.js"

jest.mock("../../src/lib/export.js")

describe('signIn', () => {
    it('a função deve ser chamada uma vez', () => {
      const email = 'email@gmail.com';
      const password = '123456';
      signIn (email, password);
      expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
      });
    });