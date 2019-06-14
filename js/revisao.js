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

    if(localStorage.getItem("forma") == "cartao") {
        $(".cartao").css("display", "block");
    }
    else {
        $(".boleto").css("display", "block");
    }
});

$("#confirmacompra").click(function(){
    var result = confirm("Tem certeza que deseja confirmar?\nClique em 'OK' para confirmar e retornar à página principal");
    if(result == true) {
        $(location).attr('href', 'home.html');
     }
});