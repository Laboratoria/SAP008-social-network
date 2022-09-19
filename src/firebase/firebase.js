import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const userLogin = (email, password) => {         
  signInWithEmailAndPassword(auth, email, password)      
  .then((userCredential) => {                             
    const user = userCredential.user;                     
    window.alert(`O e-mail logado foi ${user.email}`);    
  })                                                      

  .catch((error) => {                                     
    const errorCode = error.code;                         
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

