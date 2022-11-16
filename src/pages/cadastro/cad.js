/* eslint-disable no-alert */

import {
  auth,
  createUser,
} from '../../lib/auth.js';

import {
  errorsFirebase,
  validateRegister,
} from '../../validations.js';

import { redirect } from '../../redirect.js';
import { updateProfile } from '../../lib/exports.js';

export const mainRegister = () => {
  const sectionRegister = document.createElement('section');
  sectionRegister.innerHTML = `
  <form class='register'>
    <label for="text-name" class="text-name">Nome:</label>
    <input class="input-name" type="email" id="input-name"/>
    <label for="text-email" class="text-email">Email:</label>
    <input class="input-email" type="email" id="input-email"/>
    <label for="text-password" class="text-password">Senha:</label>
    <input class="input-password" type="password" id="input-password"/>
    <label for="text-password-repeat" class="text-password-repeat">Confirme sua senha:</label>
    <input class="input-password-repeat" type="password" id="input-password-repeat"/>
    <button type="button" class="btn" id="btn-register">Cadastrar</a>
    <a href="#login">
      <button type="button" class="btn" id="btn-back">Voltar</button>
    </a>
  </form>
  <p class="msg-error"></p>
`;
  const name = sectionRegister.querySelector('#input-name');
  const email = sectionRegister.querySelector('#input-email');
  const password = sectionRegister.querySelector('#input-password');
  const passwordRepeat = sectionRegister.querySelector('#input-password-repeat');
  const btnRegister = sectionRegister.querySelector('#btn-register');
  const errorMessage = sectionRegister.querySelector('.msg-error');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validateRegister(
      name.value,
      email.value,
      password.value,
      passwordRepeat.value,
    );
    if (validation === '') {
      createUser(email.value, password.value, name.value)
        .then(() => updateProfile(auth.currentUser, {
          displayName: name.value,
        }))
        .then(() => {
          redirect('#login');
        })
        .catch((error) => {
          const errorFirebase = errorsFirebase(error.code);
          errorMessage.innerHTML = errorFirebase;
        });
    } else {
      errorMessage.innerHTML = validation;
    }
  });

  return sectionRegister;
};
