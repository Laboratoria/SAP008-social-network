// export function modal(text) {
//     const element = document.createElement('div');
//     element.classList.add('modal-backdrop');
//     element.innerHTML = `
//       <div class='modal-content'> 
//           <button class="btn-close">
//           <img src="./imagens/btnclose.png" alt="botão-fechar">
//           </button>
//           <p> ${text} </p>
//       </div>
//       `;
//     const root = document.body;
//     function close() {
//       root.removeChild(element);
//     }
//     const btn = element.querySelector('button');
//     btn.addEventListener('click', close);
//     root.appendChild(element);
//   }
  