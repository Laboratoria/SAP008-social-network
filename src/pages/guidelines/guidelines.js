export default () => {
  const containerGuidelines = document.createElement('div');

  const guidelines = `
    <div class='body-guidelines'>
      <h1 class='title-guidelines'>DIRETRIZES PARA O USO DA BABYSTEPS</h1><p></p><br>
      <p></p><br>

      <div class='main-guidelines'>     
        Criamos este guia com as diretrizes da BabySteps para sempre nos lembrarmos que estamos aqui unidos com o intuito de contribuir com informações que ajudem, apoiem e acolham.<br>
        E foi com o objetivo de manter nossas relações saudáveis e alinhadas a esse propósito que criamos nosso top 7 pontos de atenção e cuidados:<p></p><br>

        1) Tenha empatia: Coloque-se no lugar e trate as pessoas aqui presentes como você gostaria de ser tratado(a). <p></p><br>

        2) Não julgue: Sabemos que cada mãe e pai é livre para decidir o que acha mais acertado para sua família, não julgue e nem questione suas decisões. <p></p><br>

        3) Seja cordial: Cuide do tom que você dá dicas e passa seu conhecimento, seja ele técnico ou de vivências pessoais. <p></p><br>

        4) Seja rede de apoio: Ofereça apoio, dívida coisas legais que você aprendeu e que pode fazer a diferença nos desafios de outra mãe ou pai. <p></p><br>

        5) Respeite: Não é permitido comentários racistas, preconceituosos ou discriminatórios de qualquer natureza. <p></p><br>

        6) Participação Moderada: Qualquer postagem com conteúdo inapropriado (preconceituosa, racista, discriminatória, de propaganda e etc.) será excluída. <p></p><br>

        7) Aproveite! Essa rede social foi construída com o propósito de tornar a mapaternidade mais leve e menos solitária, então quanto mais trocas e interações, mais atingiremos nosso objetivo! :) <p></p><br>
      </div>
      <div class='footer-guidelines'>
      <p>BabySteps, 2022 © Marjorye Kichize, Nathalia Rigo e Thamires Santos.</p>
    </div>
    </div>
  `;

  containerGuidelines.innerHTML = guidelines;
  return containerGuidelines;
};
