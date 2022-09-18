import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
//No import acima, adicionei mais dois parametros, que são os de logar com e-mail e senha e criar usuário c/ e-mail e senha
//conforme indica na documentação.

const firebaseConfig = {
  apiKey: "AIzaSyDgjINGIqA3XMCdF9ZWfq9Zw3fsMtEvGm0",
  authDomain: "social-network-f3eab.firebaseapp.com",
  projectId: "social-network-f3eab",
  storageBucket: "social-network-f3eab.appspot.com",
  messagingSenderId: "654603154835",
  appId: "1:654603154835:web:e1c7b6f13b14b6b3a7a466",
  measurementId: "G-7Y1PN36PHW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const userLogin = (email, password) => {         //adicionei export na const p/ organizar melhor o código, com isso
  signInWithEmailAndPassword(auth, email, password)      //o valor dela será usado lá no app.js quando for acionado o evento de escuta
  .then((userCredential) => {                             // assim que o usuário inserir seu e-mail e senha e clicar em Entrar,
    const user = userCredential.user;                     //automaticamente acontecerá a validação/autenticação.
    window.alert(`O e-mail logado foi ${user.email}`);    //Coloquei o window.alert para ter certeza de que estava funcionando c/ o e-mail de 
  })                                                      //teste que criei lá no console do firebase: teste@teste.com - senha: teste123

  .catch((error) => {                                     //Aqui acontece a seguinte situação: Caso o usuário digite um e-mail ou senha diferente,
    const errorCode = error.code;                         //será mostrado no alert uma mensagem padrão de erro (Firebase: Error (auth/wrong-password).
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
}

export const registerUser = (email, password) => {        //adicionei export na const p/ organizar melhor o código, com isso
  createUserWithEmailAndPassword(auth, email, password)   //o valor dela será usado lá no register.js quando for acionado o evento de escuta
  .then((userCredential) => {                             // assim que o usuário inserir seu e-mail e senha e clicar em Cadastrar,
    const user = userCredential.user;                       //automaticamente acontecerá a validação/autenticação e ele será cadastrado e irá
    window.alert(`O e-mail cadastrado foi ${user.email}`);    //para a parte de usuários no firebase.
  })                                                          //Coloquei o window.alert para ter certeza de que estava funcionando o e-mail que criei
                                                              //já no navegador(template): teste2@teste.com - senha: teste123

  .catch((error) => {                                         //Aqui acontece a seguinte situação: Caso o usuário digite um e-mail já cadastrado,
    const errorCode = error.code;                             //será mostrado no alert uma mensagem padrão de erro (Firebase: Error (auth/email-already-in-use)
    const errorMessage = error.message;
    window.alert(errorMessage);
  });
}

