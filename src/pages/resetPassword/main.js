import {
  resetPassword,
} from '../../lib/firebase-auth.js';

import {
  handleFirebaseErrors,
} from '../../lib/validation.js';

export default () => {
  const resetContainer = document.createElement('div');
  const template = `
          <header class="header-reset display-flex">
              <a href="#homepage" class="return-btn" id="return-btn"><img class="return-btn" src="img/returnBtn.svg" alt="back arrow"></a>
              <h1><img class="img-logo-login" src="img/Rebu.svg" alt="Rebu Logo"></h1>
          </header>
          <div class="gif-side-desktop" id="desktop-page">
          <video autoplay loop class="bg-gif-desktop">
            <source src="img/gifDesktop.mp4" type="video/mp4">
          </video>
          <img src="img/Rebu.svg" alt="Rebu Logo" class="rebu-logo-desktop">
          </div>
  
          <main id="reset-page" class="reset-page">
            <h1 class="title-desktop">REDEFINIR SENHA</h1>
            <form class="reset-form display-flex">
              <h2 class="reset-text">REDEFINA SUA SENHA</h2>
              <p class="message-about-reset">Para redefinir sua senha, 
              preencha o campo abaixo com seu e-mail cadastrado.</p>
              <input type="email" placeholder="E-MAIL" id="email-input-reset" class="input-style-reset">
              <nav class="reset-buttons">
                <a href="#homepage"><button type="button" id="btn-cancel-reset" class="btn-cancel-reset">RETORNAR</button></a>
                <a href="#homepage"><button type="button" id="btn-reset-page" class="btn-reset">REDEFINIR</button></a>
              </nav>
        
            </form>

            <p class="hide reset-message"></p>
  
          </main>
        `;
  resetContainer.innerHTML = template;

  const returnBtn = resetContainer.querySelector('#return-btn');
  const emailValue = resetContainer.querySelector('#email-input-reset');
  const sendBtn = resetContainer.querySelector('#btn-reset-page');
  const resetMessage = resetContainer.querySelector('.reset-message');

  returnBtn.addEventListener('click', () => window.history.back());

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetPassword(emailValue.value)
      .then(() => {
        resetMessage.textContent = 'Email enviado com sucesso.';
        resetMessage.classList.remove('hide');
      })
      .catch((error) => {
        resetMessage.classList.remove('hide');
        const errorCode = error.code;
        const errorMessage = handleFirebaseErrors(errorCode);
        resetMessage.textContent = errorMessage;
      });
  });

  return resetContainer;
};
