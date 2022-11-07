import { signOutUser } from '../lib/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
  <header class="nav-feed">
        <div class="div-menu">
            <button id="btn-menu"><img src="/img/menu.png" class="img-menu"</button>
        </div>
            <form class="conj-pesquisar">
                <input type="text" id="caixa-pesquisar" placeholder="Pesquisar">
                <button type="submit" id="submit-pesquisar"><img src="/img/pesquisar.png" alt="botão de pesquisa"></button>
            </form>
            <button type="button" id="logout" class="botaoLogout">sair</button>
    </header>
<main class="feed-desktop" id="feed">
  <section  id="section-pages">
      <ul>
          <li class="btn-pages">
          <a href="/#feed" class="link">Home</a>
          </li>
          <li class="btn-pages">
              <a href="/#momentoCookie" class="link">Momento Cookie</a>
          </li>
          <li class="btn-pages">
              <a href="/#bemEstar" class="link">Bem Estar</a>
          </li>
      </ul>
  </section>
  <section id="sectionBe" class="sectionBe">
      <div class="conteudoBe">
        <p><strong>Denunciar e buscar ajuda a vítimas de violência contra mulheres (Ligue 180) || 
        " Central de Atendimento à Mulher – Ligue 180" , " Lei Maria da Penha"</strong></p><br>

        <p><strong>COMO FUNCIONA</strong></p><br>

        A Central de Atendimento à Mulher – Ligue 180 presta uma escuta e acolhida 
        qualificada às mulheres em situação de violência. O serviço registra e encaminha 
        denúncias de violência contra a mulher aos órgão competentes, bem como reclamações, 
        sugestões ou elogios sobre o funcionamento dos serviços de atendimento.
        O serviço também fornece informações sobre os direitos da mulher, como os locais 
        de atendimento mais próximos e apropriados para cada caso: Casa da Mulher Brasileira,
        Centros de Referências, Delegacias de Atendimento à Mulher (Deam), Defensorias Públicas,
        Núcleos Integrados de Atendimento às Mulheres, entre outros.
        A ligação é gratuita e o serviço funciona 24 horas por dia, todos os dias da semana. 
        São atendidas todas as pessoas que ligam relatando eventos de violência contra a mulher.
        O Ligue 180 atende todo o território nacional e também pode ser acessado em outros 
        países.<br><br>

        <p><strong>QUEM PODE UTILIZAR ESSE SERVIÇO?</strong></p><br>

        <p>Mulheres em situação de violência ou testemunhas de violência contra mulheres</p><br>

        <p><strong>ETAPAS</strong></p><br>

        1- Fazer uma denúncia ou buscar acolhimento<br><br>

        A Central de Atendimento à Mulher – Ligue 180 está disponível diariamente, 24 horas 
        por dia, incluindo sábados, domingos e feriados. As denúncias são registradas e 
        encaminhadas aos órgãos competentes. Também é possível fazer reclamações, sugestões 
        ou elogios sobre o funcionamento dos serviços de atendimento.<br><br>

        CANAIS DE PRESTAÇÃO<br><br>

        Telefone | No Brasil: 180.<br><br>
  
        As ligações podem ser feitas de todo o Brasil, gratuitamente, de qualquer telefone 
        fixo ou móvel (celular): basta ligar 180.<br><br>
        Passo 1: Digite o número do país em que você estiver (confira abaixo)<br>
        Passo 2: Escolha o idioma. Tecle 1 para português ou 2 para inglês<br>
        Passo 3: Aperte 1 novamente<br>
        Passo 4: Ligue para o número 61 3535-8333<br><br>

        País Telefone<br><br>
        África do Sul 0800 99 00 55<br>
        Alemanha 0800 08 000 55<br>
        Argentina 0800 999 55 00 | 0800 999 55 01 | 0800 999 55 03 | 0800 555 55 00<br>
        Austrália	1800 88 15 50<br>
        Áustria	0800 200 255<br>
        Bélgica	0800 100 55<br>
        Bolívia	800 1000 55<br>
        Canadá 1800 46 366 56<br>
        Chile	800 360 220 | 800 800 272<br>
        China	800 4900 125<br>
        Chipre	800 932 91<br>
        Cingapura	8000 55 05 50<br>
        Colômbia	01800 955 00 10<br>
        Coreia do Sul 00722055 | 00309551<br>
        Dinamarca	808 855 25<br>
        Eslováquia	0800 00 55 00<br>
        Espanha	900 99 00 55<br>
        Estados Unidos	1800 745 55 21<br>
        Formosa	801550055<br>
        França	0800 99 00 55<br>
        Grécia	800 161 220 54 194<br>
        Guiana Francesa	0800 99 00 55<br>
        Holanda	08 000 220 655<br>
        Hungria	068 000 5511<br>
        Israel	1809494550<br>
        Itália	800 172 211<br>
        Japão	005 395 51 | 006 635 055<br>
        Luxemburgo	0800 200 55<br>
        México	01800 123 02 21<br>
        Noruega	800 195 50<br>
        Panamá	008 000 175<br>
        Paraguai	008 55 800<br>
        Peru	0800 50 190<br>
        Polônia	008 00 491 14 88<br>
        Portugal	800 800 550<br>
        Reino Unido	0800 89 00 55<br>
        República Dominicana	1800 7518500<br>
        Rússia	810 800 20 971 049<br>
        Suécia	207 990 55<br>
        Suíça	0800 555 251<br>
        Uruguai	000455<br>
        Venezuela	0800 100 15 50<br><br>

        Tempo estimado de espera :  Até 1 minuto(s)<br><br>

        Web :<br>
        ouvidoria.mdh.gov.br<br><br>
        
        E-mail :<br>
        ouvidoria@mdh.gov.br<br><br>
      
        Ouvidoria Nacional de Direitos Humanos<br>
        Ministério da Mulher, da Família e dos Direitos Humanos<br>
        Esplanada dos Ministérios Bloco A<br>
        Postal :CEP: 70.049-900 – Brasília, DF<br><br>
        
        Presencial :<br>
        Ouvidoria Nacional de Direitos Humanos<br>
        Esplanada dos Ministérios Bloco A – Térreo<br>
        CEP: 70.049-900 – Brasília, DF<br><br>
        
        Dias de atendimento: de segunda à sexta-feira, exceto aos feriados.<br><br>
        
        Horário de atendimento: de 9h às 12h e de 14h às 18h.<br><br>
        
        Tempo estimado de espera :  Até 20 minuto(s)<br><br>
        
        Aplicativo móvel : <br>
        O Ligue 180 também está disponível pelo WhatsApp. Para receber atendimento 
        ou fazer denúncias, basta o cidadão enviar mensagem para o número:<br>
        61 99656-5008<br><br>
        
        Após resposta automática, ele será atendido por uma pessoa da equipe da Central de 
        Atendimento à Mulher – Ligue 180.<br><br>
        
        Aplicativo móvel :<br>
        Também é possível utilizar o Ligue 180 por meio do Telegram, 
        basta digitar “Direitoshumanosbrasilbot” na busca do aplicativo.<br><br>
        
        Após uma mensagem automática inicial, o atendimento será realizado pela equipe 
        da Central de Atendimento à Mulher – Ligue 180.<br><br>

        TEMPO DE DURAÇÃO DA ETAPA<br><br>
        Atendimento imediato<br><br>

        2- Acompanhamento da denúncia<br><br>
        Após o registro, a denúncia é analisada e encaminhada aos órgãos de proteção, defesa 
        e responsabilização em direitos humanos, respeitando as competências de cada órgão.<br><br>

        Se o cidadão quiser acompanhar a denúncia, basta ligar para o Ligue 180, fornecer
        o número de protocolo e confirmar os dados da denúncia.<br><br>

        CANAIS DE PRESTAÇÃO<br><br>

        Telefone | No Brasil: 180.<br><br>
  
        As ligações podem ser feitas de todo o Brasil, gratuitamente, de qualquer telefone 
        fixo ou móvel (celular): basta ligar 180.<br><br>
        Passo 1: Digite o número do país em que você estiver (confira abaixo)<br>
        Passo 2: Escolha o idioma. Tecle 1 para português ou 2 para inglês<br>
        Passo 3: Aperte 1 novamente<br>
        Passo 4: Ligue para o número 61 3535-8333<br><br>

        País Telefone<br><br>
        África do Sul 0800 99 00 55<br>
        Alemanha 0800 08 000 55<br>
        Argentina 0800 999 55 00 | 0800 999 55 01 | 0800 999 55 03 | 0800 555 55 00<br>
        Austrália	1800 88 15 50<br>
        Áustria	0800 200 255<br>
        Bélgica	0800 100 55<br>
        Bolívia	800 1000 55<br>
        Canadá 1800 46 366 56<br>
        Chile	800 360 220 | 800 800 272<br>
        China	800 4900 125<br>
        Chipre	800 932 91<br>
        Cingapura	8000 55 05 50<br>
        Colômbia	01800 955 00 10<br>
        Coreia do Sul 00722055 | 00309551<br>
        Dinamarca	808 855 25<br>
        Eslováquia	0800 00 55 00<br>
        Espanha	900 99 00 55<br>
        Estados Unidos	1800 745 55 21<br>
        Formosa	801550055<br>
        França	0800 99 00 55<br>
        Grécia	800 161 220 54 194<br>
        Guiana Francesa	0800 99 00 55<br>
        Holanda	08 000 220 655<br>
        Hungria	068 000 5511<br>
        Israel	1809494550<br>
        Itália	800 172 211<br>
        Japão	005 395 51 | 006 635 055<br>
        Luxemburgo	0800 200 55<br>
        México	01800 123 02 21<br>
        Noruega	800 195 50<br>
        Panamá	008 000 175<br>
        Paraguai	008 55 800<br>
        Peru	0800 50 190<br>
        Polônia	008 00 491 14 88<br>
        Portugal	800 800 550<br>
        Reino Unido	0800 89 00 55<br>
        República Dominicana	1800 7518500<br>
        Rússia	810 800 20 971 049<br>
        Suécia	207 990 55<br>
        Suíça	0800 555 251<br>
        Uruguai	000455<br>
        Venezuela	0800 100 15 50<br><br>

        Tempo estimado de espera :  Até 1 minuto(s)<br><br>

        TEMPO DE DURAÇÃO DA ETAPA<br><br>

        Não estimado<br><br>
        fonte: https://www.gov.br/pt-br/servicos/denunciar-e-buscar-ajuda-a-vitimas-de-violencia-contra-mulheres

      </div>
  </section>
</main>
      `;
  container.innerHTML = template;

  const botaoLogout = container.querySelector('#logout');

  botaoLogout.addEventListener('click', async() =>{
    await signOutUser()
    .then(() => {
      window.location.hash = '#login';
    })
    .catch((error) => {
      msgErro.innerHTML= 'erro ao sair';
    });
});
  return container;
};
