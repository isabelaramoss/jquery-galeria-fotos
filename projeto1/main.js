  /*
  //Para usar jQuery é preciso de $(). dentro dos () informamos o elemento, seletor - no exemplo abaixo, document. 
  //Também sobre o exemplo abaixo estamos dizendo que quando o document estiver pronto/.ready execute a função alert.
  $(document).ready(function () {
      alert("Olá jQuery")
  }) 

  // Tudo o que precisamos ou queremos do jQuery temos que colocar dentro desse escopo.
  */
  /*
  $(document).ready(function () {
    // no jss normal, o códígo para selecionar o botão do header seria: 
    // console.log(document.querySelector('header button'));
    // No jQuery escrevemos o mesmo código assim:
    console.log($('header button'));
    console.log($('#botao-cancelar'));
  })
  */


  $(document).ready(function(){
    $('header button').click(function(){
      $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
      $('form').slideUp();
    })

    $('form').on('submit', function (e){
      e.preventDefault();
      const enderecoDaNovaImagem = $('#endereco-nova-imagem').val();
      const novoItem = $('<li style="display: none"></li>');
      $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
      $(`
      <div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
        </a>
      </div>
      `).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $(novoItem).fadeIn(1000);
      $('#endereco-nova-imagem').val('')
    })
  })