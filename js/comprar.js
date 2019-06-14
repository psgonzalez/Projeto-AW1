// Cálculo de frete e API viacep

$(document).ready(function() {

    var end = document.getElementById("endereco");

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        end.textContent = "";
        
    }
    
    //Quando o campo cep perde o foco.
    $("#cep-id").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                
                
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza o campo com o valor da consulta.
                        end.textContent = dados.logradouro;
                        
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});


// Animação div de frete

$('#botao-frete').on('click', function() {
    // Div frete visível
    $("#section4").show();

    // Altera a posição para top e adiciona animação para a transição
    const frete = $('#section4').position().top;
    $('html, body').animate({
        scrollTop: frete
    }, 1500);
});

// Função que armazena o tipo da plataforma de acordo com o botão clicado
$(".plat").click(function(){

    // Recebe o valor do botão
    var valor = $(this).val();
    if(valor == "pc"){
        // Armazena o valor 'Computador'
        localStorage.setItem("plataforma", "Computador");
    }
    else {
        // Armazena o valor 'Nintendo Switch'
        localStorage.setItem("plataforma", "Nintendo Switch");
    }
        
});
