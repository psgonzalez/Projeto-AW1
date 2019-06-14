// Altera os dados de acordo com o cadastro
$(document).ready(function () {
    
    // Define os conteúdos dos spans
    $("#forma").append(localStorage.getItem("forma"));
    $("#nome").append(localStorage.getItem("nome"));
    $("#num-cartao").append(localStorage.getItem("numeroCartao"));
    $("#titular-cartao").append(localStorage.getItem("titular"));
    $("#cep").append(localStorage.getItem("cep"));
    $("#rua").append(localStorage.getItem("logradouro"));
    $("#numero").append(localStorage.getItem("numero"));
    $("#complemento").append(localStorage.getItem("complemento"));
    $("#bairro").append(localStorage.getItem("bairro"));
    $("#cidade").append(localStorage.getItem("cidade"));
    $("#uf").append(localStorage.getItem("uf"));
    $("#email").append(localStorage.getItem("email"));

    // Checa a opção de pagamento
    value = localStorage.getItem("forma");

    // Caso seja boleto bancário
    if(value == "Boleto bancário") {
        // var boleto = document.getElementsByClassName("boleto")
        // boleto.style.display = "block";

        // Altera o display da classe boleto para block
        $(".boleto").css('display', 'block');
    }
    else {
        var cartao = [];
        // Resgata os elementos com a classe cartao
        cartao =  document.getElementsByClassName("cartao");

        // Altera o display dos elementos para block
        for(i = 0; i < cartao.length; i++) {
            cartao[i].style.display = "block";
        }
    }
});

$("#confirmacompra").click(function(){
    var result = confirm("Tem certeza que deseja confirmar?\nClique em 'OK' para confirmar e retornar à página principal");
    if(result == true) {
        $(location).attr('href', 'home.html');
     }
});