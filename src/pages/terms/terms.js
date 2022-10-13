export default () => {
  const containerTermsOfUse = document.createElement('div');

  const terms = `
    <div class="body-terms">
      <h1 class="title-terms">TERMOS DE USO</h1><p></p><br>
      <p></p><br>

      <div class="main-terms">
        <b>1. ACEITAR OS TERMOS</b><br>

        No momento do cadastro, os USUÁRIOS poderão utilizar todos os serviços disponibilizados na PLATAFORMA, declarando terem lido, compreendido e aceitado todos os dispositivos contidos neste Termos de Uso.<p></p><br>

        <b>2. É EXPRESSAMENTE PROIBÍDO AO USUÁRIO</b><br>

        2.1. Divulgar conteúdos encontrados nesta rede social sem autorização de quem o escreveu/publicou. <br>

        2.2. O nome que o USUÁRIO e o PROFISSIONAL utilizarem na PLATAFORMA não poderá guardar semelhança com o nome BABYSTEPS que insinue ou sugira que os posts/comentários/serviços sejam feitos pela BABYSTEPS; <br>

        2.3. O USUÁRIO fica ciente que se for identificada qualquer conduta de sua parte que vier a ofender outros USUÁRIOS, a BABYSTEPS, ou terceiro, bem como seja ela ofensiva a legislação vigente, a BABYSTEPS pode excluí-lo,
        inabilitá-lo, suspendê-lo, bloqueá-lo, por tempo indeterminado, sem aviso prévio; <br>

        2.4. Usar linguajar de baixo calão, ofensivo ou com sentido dúbio (diferentes interpretações); <br>

        2.5. Fazer menção à alguma plataforma concorrente ou indicar outros USUÁRIOS/PROFISSIONAIS que não façam parte da plataforma.<p></p><br>

        <b>3. SOBRE OS PROFISSIONAIS</b><br>

        3.1. Os USUÁRIOS entendem e declaram reconhecer que os PROFISSIONAIS são prestadores de serviços INDEPENDENTES, AUTÔNOMOS e não exclusivos da PLATAFORMA, os quais atuam por conta própria, sem qualquer tipo de vínculo
        empregatício com a BABYSTEPS; <br>

        3.2. Através deste documento, os USUÁRIOS declaram que não atribuíram nenhum tipo de responsabilidade à BABYSTEPS que não diga respeito exclusivamente a manutenção da PLATAFORMA, bem como de todas as suas funcionalidades.<p></p><br>

        <b>4. CADASTRO DO PROFISSIONAL</b><br>

        Para os profissionais estarem habilitados à utilização da PLATAFORMA, os seguintes requisitos deverão ser cumpridos após avaliação da BABYSTEPS: <br>

        4.1. Ter dezoito anos completos ou mais; <br>
        
        4.2. Possuir todas as licenças e autorizações, bem como preencher todas as normas necessárias à prestação dos serviços ofertados na PLATAFORMA; <br>

        4.3. O PROFISSIONAL deverá fornecer em seu perfil o NÚMERO DE REGISTRO e informações que comprovem sua identidade, sua habilitação técnica/profissional, bem como informações essenciais ao cadastro.<p></p><br>
      </div>
      <div class="footer-terms">
        <p>BabySteps, 2022 © Marjorye Kichize, Nathalia Rigo e Thamires Santos.</p>
      </div>
    </div>
  `;

  containerTermsOfUse.innerHTML = terms;
  return containerTermsOfUse;
};
