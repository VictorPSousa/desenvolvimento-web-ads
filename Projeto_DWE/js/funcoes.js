
$(document).ready(function (){
    $("#cep").mask("00000-000");
});

$(document).ready(function (){
    $("#cel").mask("+55 (00) 00000-0000");
});
	
$(document).ready(function (){
    $("#fone").mask("(00) 0000-0000");
});

$(document).ready(function (){
    $("#cpf").mask("000.000.000-00");
});

$(document).ready(function (){
    $("#rg").mask("00.000.000-0");
});

$(function(){
	$("#cep").autocompleteAddress();
});

function msg_sucesso(){
    Swal.fire(
        'Obrigado(a)!',
        'Mensagem enviada com sucesso!',
        'success'
    );
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 2000);
};

function cad_sucesso(){
    Swal.fire(
        'Obrigado(a)!',
        'Usuário cadastrado com sucesso!',
        'success'
    );
    setTimeout(function() {
        window.location.href = "../paginas/login.html";
    }, 2500);
};

function login_erro(){
    Swal.fire(
        'Erro',
        'Usuário não encontrado no sistema',
        'error'
    );
    setTimeout(function() {
        window.location.href = "../paginas/login.html";
    }, 2500);
};
