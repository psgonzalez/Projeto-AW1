//Webservice de consulta de CEP do viacep.com.br

$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#logradouro-id").val("");
        $("#bairro-id").val("");
        $("#cidade-id").val("");
        $("#uf-id").val("");
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

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#logradouro-id").val("...");
                $("#bairro-id").val("...");
                $("#cidade-id").val("...");
                $("#uf-id").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#logradouro-id").val(dados.logradouro);
                        $("#bairro-id").val(dados.bairro);
                        $("#cidade-id").val(dados.localidade);
                        $("#uf-id").val(dados.uf);
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

$("#btn-enviar").on('click', function(){
    alert("Você está cadastrado!\nClique em 'OK' para ser redirecionado para a página principal.");
    $(location).attr('href', 'home.html');
});