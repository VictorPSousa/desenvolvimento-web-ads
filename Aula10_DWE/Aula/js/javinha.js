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