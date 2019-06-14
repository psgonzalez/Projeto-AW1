$("#op-c").click(function(){
    $("#dados-cartao").slideToggle(800);
    localStorage.setItem("forma", "Cartão de crédito");
});

$("#op-b").click(function(){
    $("#dados-cartao").slideUp(800);
    localStorage.setItem("forma", "Boleto bancário");
});

// Função que armazena temporariamente os dados
$("#btn-avancar").click(function(){
    var numeroCartao = $("#numero-cartao").val();
    var titularCartao = $("#titular-cartao").val();

    localStorage.setItem("titular", titularCartao);
    localStorage.setItem("numeroCartao", numeroCartao);

    $(location).attr('href', 'revisao.html');
})


