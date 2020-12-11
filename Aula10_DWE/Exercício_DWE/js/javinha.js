function acesso() { 
    var idade = document.getElementById("cx1").value;
    var cidade = document.getElementById("cx2").value;
    if(idade >= 18 || cidade == "Guarulhos"){// OU || , E &&
        alert("Acesso permitido");
        window.location.href= "menu.php";
    }
    else if (idade == 2)
    {
        alert("Acesso negado");
        window.location.href= "index.html";
    }
    else{
        
    }
}

function logar(){
    var user = document.getElementById("box1").value;
    var senha = document.getElementById("box2").value;
    if(user == "Anselmo" && senha == "1234"){
        alert("Acesso permitido");
        window.location.href= "home.php";
    }
    else{
        alert("Acesso negado");
        window.location.href= "sair.php";
    }
}

function lista(){
    var num = 1;
    while(num <= 10){
        document.write("Nº "+num+"<br/>");
        num++;
    }
}

function calcular(){
    var num = 0;
    var cal = document.getElementById("cont1").value;
    while(num <= 10){
        document.write(cal+" X "+num+" = "+(cal*num)+"<br/>");
        num++;
    }
}

/*
function tentar(){
    var tentativa = 3;
    var usuario = document.getElementById("caixa1").value;
    var pass = document.getElementById("caixa2").value;

    if(usuario == "Anselmo" && pass == "1234"){
        alert("Sucesso");
        window.location.href= "home.php";
    }
    else{
        while(tentativa > 1){
            tentativa--;
            alert("Acesso negado, restam "+tentativa);
            window.location.href= "index.html";
        }
    }  
}
*/

function tentar(){
    var tentativa = 3;
    
		/*while(tentativa >= 1){
			var usuario = document.getElementById("caixa1").value;
            var pass = document.getElementById("caixa2").value;
			
			if(usuario == "Anselmo" && pass == "1234"){
				alert("Sucesso");
				window.location.href= "home.php";
			}else{
				tentativa--;
				if(tentativa == 0){
					window.location.href= "index.html";
				}else{
					alert("Acesso negado, restam "+tentativa+" tentativas");
					continue;
				}
				
			}
			
        }*/
		
		var count = 3;
			do{
				var usuario = document.getElementById("caixa1").value;
				var pass = document.getElementById("caixa2").value;
				
				if(usuario == "Anselmo" && pass == "1234"){
					alert("Sucesso");
					window.location.href= "home.php";
				}else{
					count--;
					var resp = alert("Acesso negado, restam "+count+" tentativas");
					goto tentar();
				}
				
				return resp;
			}while(count >= 1)
	
}