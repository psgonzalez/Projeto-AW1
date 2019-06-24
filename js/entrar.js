$("#esqueceusenha").click(function() {
    $("#esqueceu-senha").show()
});

//Animação para div esqueceu-senha

$('#esqueceusenha').on('click', function() {
    const div = $('#esqueceu-senha').position().top;

    $('html, body').animate({
        scrollTop: div
    }, 1250);
});

function validaDados(){
    const email = $('#email-id').val()
    const senha = $('#senha-id').val()
    const emailSalvo = localStorage.getItem('email')
    const senhaSalva = localStorage.getItem('senha')

    if(email == emailSalvo && senha == senhaSalva)
        return true
    else
        return false;
}

$('#entrar').click(function(){
    if(!validaDados()) {
        alert("E-mail e/ou senha inválidos")
    }
    else {
        $(location).attr('href', 'carrinho.html');
    }
})
