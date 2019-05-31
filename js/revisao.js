$("#confirmacompra").click(function(){
    var result = confirm("Tem certeza que deseja confirmar?\nClique em 'OK' para confirmar e retornar à página principal");
    if(result == true) {
        $(location).attr('href', 'home.html');
     }
});