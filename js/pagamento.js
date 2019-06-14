// Altera a plataforma na tabela de acordo com a selecionada pelo usuário
$(document).ready(function () {
    // Resgata o elemento span
    var plat = document.getElementById("plat");
    
    // Define o conteúdo do span com o valor armazenado no item 'plataforma'
    plat.textContent = localStorage.getItem("plataforma");
});