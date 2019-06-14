$("#esqueceusenha").click(function() {
    $("#esqueceu-senha").show()
});

//Animação para div esqueceu-senha

$('#esqueceusenha').on('click', function() {
    const div = $('#esqueceu-senha').position().top;

    $('html, body').animate({
        scrollTop: div
    }, 1200);
});

$("")
