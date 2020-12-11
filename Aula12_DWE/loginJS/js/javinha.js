var tentativas = 3;

function entrar(){
    var loginCadastrado = "Anselmo";
    var senhaCadastrada = "1234";

    while (tentativas <= 3){
        loginInformado = document.getElementById("cxlogin").value;
        senhaInformada = document.getElementById("cxsenha").value;

        if(loginCadastrado == loginInformado && senhaCadastrada == senhaInformada){
            alert("Ben vindo ao sistema");
			window.location.href = "sistema.html";
			break;
        }else{
			tentativas--;
			if(tentativas==0){
				window.location.href = "saida.html";
			}else{
				alert("Login inválido, resta somente "+(tentativas)+" Tentativas");
			}	
			break;
		}
    }
	
	
	
}