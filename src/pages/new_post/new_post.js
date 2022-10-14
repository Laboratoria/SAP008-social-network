import { create } from "../../lib/auth.js";
export default () => {
    const container = document.createElement('div')
    const template =
        `<section class="container">
        <p>Olá, Usuário! Qual sua nova crítica?</p>

        <form class="evaluation-inputs">
            <input id="local" type="text" placeholder="Nome do restaurante" />
            <input id="adress" type="text" placeholder="Endereço do restaurante" />

            <div class="evaluation-container">
                <p>AVALIE</p>
                <ul class="rate">
                    <li class="circle-icon active" rate-food="1"></li>
                    <li class="circle-icon" rate-food="2"></li>
                    <li class="circle-icon" rate-food="3"></li>
                    <li class="circle-icon" rate-food="4"></li>
                    <li class="circle-icon" rate-food="5"></li>
                </ul>
                <p class="rate-type">Comida</p>

                <ul class="rate">
                    <li class="circle-icon active" rate-price="1"></li>
                    <li class="circle-icon" rate-price="2"></li>
                    <li class="circle-icon" rate-price="3"></li>
                    <li class="circle-icon" rate-price="4"></li>
                    <li class="circle-icon" rate-price="5"></li>
                </ul>
                <p class="rate-type">Preço</p>

                <ul class="rate">
                    <li class="circle-icon active" rate-place="1"></li>
                    <li class="circle-icon" rate-place="2"></li>
                    <li class="circle-icon" rate-place="3"></li>
                    <li class="circle-icon" rate-place="4"></li>
                    <li class="circle-icon" rate-place="5"></li>
                </ul>
                <p class="rate-type">Ambiente</p>
            </div>
            <textarea id="review" placeholder="Escreva sua crítica"></textarea>
            <a href="/#home" class="cancel-btn-new-post">Cancelar</a>
            <a href="/#home" class="post-btn-new-post">Publicar</a>
        </form>
    </section>`
    container.innerHTML = template;

    const local = container.querySelector("#local");
    const adress = container.querySelector("#adress");
    const review = container.querySelector("#review");
    const cancelBtn = container.querySelector('.cancel-btn-new-post');
    const publishBtn = container.querySelector('.post-btn-new-post');

    publishBtn.addEventListener('click', () => {
        create(local.value, adress.value, review.value)
        window.location.hash = '#home'
    })




    return container;
}